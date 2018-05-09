import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmLoginMessage from "../messages/ConfirmLoginMessage";

const DashboardPage = ({ isConfirmed }) => (
      <div>
        {!isConfirmed && <ConfirmLoginMessage />}
      </div>
    );

    DashboardPage.PropTypes = {
      isConfirmed: PropTypes.bool.isRequired
    };

    function mapStateToProps(state) {
      return {
        isConfirmed: !!state.user.confirmed
      };
    }



export default connect(mapStateToProps)(DashboardPage);
