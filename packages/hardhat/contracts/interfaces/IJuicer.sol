// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma experimental ABIEncoderV2;

import "./ITicketStore.sol";
import "./IBudgetStore.sol";
import "./IBudgetController.sol";
import "./ITicketsController.sol";
import "./ITimelockStaking.sol";

interface IJuicer is IBudgetController, ITicketsController {
    function admin() external view returns (address);

    function budgetStore() external view returns (IBudgetStore);

    function ticketStore() external view returns (ITicketStore);

    function staking() external view returns (ITimelockStaking);

    function fee() external view returns (uint256);

    function setAdmin(address _admin) external;

    function vote(uint256 _budgetId, bool _yay) external returns (uint256);
}
