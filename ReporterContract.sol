// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract ReporterContract is Ownable, Pausable {

    struct Report{
        address Creator;
        string Note;
        uint256 ID;
        uint BlockNum;
        bool Resigned;
    }

    mapping (address => uint256[]) private reportsIN;
    mapping (address => uint256[]) private reportsOUT;
    Report[] private reports;

    mapping (address => bool) private bannedAddresses;

    string private Version;
    bool private ContractActive = true;


    constructor(string memory _Version){
        Version = _Version;
    }

    function GetVersion() public view returns (string memory){
        return Version;
    }

    function renounceOwnership() public onlyOwner virtual override(Ownable){
        Ownable.renounceOwnership();
        SetPaused(true);
        ContractActive = false;
    }

    modifier notBanned(){
        require(bannedAddresses[msg.sender] != true, "Banned Address cannot run this function.");
        _;
    }

    function SetAddressBanned(address _address, bool _banned) public onlyOwner{
        bannedAddresses[_address] = _banned;
    }

    function SetPaused(bool value) public onlyOwner {
        if (value){
            _pause();
        } else {
            _unpause();
        }
    }

    function IsBanned(address _address) public view returns (bool) {
        return bannedAddresses[_address] == true;
    }

    function ReportAddress(address _address, string memory note) public whenNotPaused notBanned {
        _ReportAddress(msg.sender, _address, note);
    }

    function SetReportResigned(uint256 id, bool value) public whenNotPaused notBanned {
        if (reports[id].Creator == msg.sender){
            reports[id].Resigned = value;
        }
    }

    function _ReportAddress(address reporter, address reportee, string memory note) private {
        int256 currentReport = GetReportFromTo(reporter, reportee);
        if (currentReport == -1){
            reports.push(Report({Creator : reporter, Note: note, ID: reports.length, BlockNum: block.number, Resigned: false}));
            reportsIN[reportee].push(reports.length-1);
            reportsOUT[reporter].push(reports.length-1);
        } else {
            reports[(uint256)(currentReport)].Note = note;
        }
    }

    function _SetReportResigned(uint256 id, bool value) private whenNotPaused {
        reports[id].Resigned = value;
    }

    function GetAllReports(address _address) public view returns (uint256[] memory) {
        return reportsIN[_address];
    }

    function GetNotResignedReports(address _address) public view returns (uint256[] memory){
        uint256[] memory _reports = new uint256[](reportsIN[_address].length);
        uint256 offset = 0;
        for (uint i=0; i<reportsIN[_address].length; i++){
            if (reports[reportsIN[_address][i]].Resigned == false && !IsBanned(reports[reportsIN[_address][i]].Creator)){
                _reports[offset] = reportsIN[_address][i];
                offset+=1;
            }
        }
        return _reports;
    }
    function GetResignedReports(address _address) public view returns (uint256[] memory){
        uint256[] memory _reports = new uint256[](reportsIN[_address].length);
        uint256 offset = 0;
        for (uint i=0; i<reportsIN[_address].length; i++){
            if (reports[reportsIN[_address][i]].Resigned == true && !IsBanned(reports[reportsIN[_address][i]].Creator)){
                _reports[offset] = reportsIN[_address][i];
                offset+=1;
            }
        }
        return _reports;
    }

    function GetReportFromTo(address from, address to) public view returns (int256){
        if (reportsOUT[from].length == 0 || reportsIN[to].length == 0) return -1;

        for (uint i1=0; i1<reportsOUT[from].length; i1++){
            for (uint i2=0; i2<reportsIN[to].length; i2++){
                if (reportsOUT[from][i1] == reportsIN[to][i2]){
                    return (int256)(reportsOUT[from][i1]);
                }
            }
        }
        return -1;
    }

    function GetReportByID(uint256 id) public view returns (address creator, string memory note, uint blockNum, bool resigned){
        Report memory rep = reports[id];
        creator = rep.Creator;
        note = rep.Note;
        blockNum = rep.BlockNum;
        resigned = rep.Resigned;
    }
}