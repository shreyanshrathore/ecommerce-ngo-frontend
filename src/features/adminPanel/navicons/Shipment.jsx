import React from "react";

const Shipment = ({fill}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M1.25 15.625V21.875C1.25 22.2065 1.3817 22.5245 1.61612 22.7589C1.85054 22.9933 2.16848 23.125 2.5 23.125H3.75C3.75 24.1196 4.14509 25.0734 4.84835 25.7767C5.55161 26.4799 6.50544 26.875 7.5 26.875C8.49456 26.875 9.44839 26.4799 10.1517 25.7767C10.8549 25.0734 11.25 24.1196 11.25 23.125H18.75C18.75 24.1196 19.1451 25.0734 19.8483 25.7767C20.5516 26.4799 21.5054 26.875 22.5 26.875C23.4946 26.875 24.4484 26.4799 25.1517 25.7767C25.8549 25.0734 26.25 24.1196 26.25 23.125H27.5C27.8315 23.125 28.1495 22.9933 28.3839 22.7589C28.6183 22.5245 28.75 22.2065 28.75 21.875V6.875C28.75 5.88044 28.3549 4.92661 27.6517 4.22335C26.9484 3.52009 25.9946 3.125 25 3.125H13.75C12.7554 3.125 11.8016 3.52009 11.0983 4.22335C10.3951 4.92661 10 5.88044 10 6.875V9.375H7.5C6.91783 9.375 6.34366 9.51054 5.82295 9.7709C5.30224 10.0313 4.8493 10.4093 4.5 10.875L1.5 14.875C1.46344 14.9293 1.43403 14.9882 1.4125 15.05L1.3375 15.1875C1.28233 15.3269 1.25269 15.4751 1.25 15.625ZM21.25 23.125C21.25 22.8778 21.3233 22.6361 21.4607 22.4305C21.598 22.225 21.7932 22.0648 22.0216 21.9701C22.2501 21.8755 22.5014 21.8508 22.7439 21.899C22.9863 21.9473 23.2091 22.0663 23.3839 22.2411C23.5587 22.4159 23.6777 22.6387 23.726 22.8811C23.7742 23.1236 23.7495 23.3749 23.6549 23.6034C23.5602 23.8318 23.4 24.027 23.1945 24.1643C22.9889 24.3017 22.7472 24.375 22.5 24.375C22.1685 24.375 21.8505 24.2433 21.6161 24.0089C21.3817 23.7745 21.25 23.4565 21.25 23.125ZM12.5 6.875C12.5 6.54348 12.6317 6.22554 12.8661 5.99112C13.1005 5.7567 13.4185 5.625 13.75 5.625H25C25.3315 5.625 25.6495 5.7567 25.8839 5.99112C26.1183 6.22554 26.25 6.54348 26.25 6.875V20.625H25.275C24.9235 20.2383 24.4951 19.9293 24.0172 19.7179C23.5394 19.5065 23.0226 19.3973 22.5 19.3973C21.9774 19.3973 21.4606 19.5065 20.9828 19.7179C20.5049 19.9293 20.0765 20.2383 19.725 20.625H12.5V6.875ZM10 14.375H5L6.5 12.375C6.61643 12.2198 6.76741 12.0938 6.94098 12.007C7.11455 11.9202 7.30594 11.875 7.5 11.875H10V14.375ZM6.25 23.125C6.25 22.8778 6.32331 22.6361 6.46066 22.4305C6.59801 22.225 6.79324 22.0648 7.02165 21.9701C7.25005 21.8755 7.50139 21.8508 7.74386 21.899C7.98634 21.9473 8.20907 22.0663 8.38388 22.2411C8.5587 22.4159 8.67775 22.6387 8.72598 22.8811C8.77421 23.1236 8.74946 23.3749 8.65485 23.6034C8.56024 23.8318 8.40002 24.027 8.19446 24.1643C7.9889 24.3017 7.74723 24.375 7.5 24.375C7.16848 24.375 6.85054 24.2433 6.61612 24.0089C6.3817 23.7745 6.25 23.4565 6.25 23.125ZM3.75 16.875H10V20.35C9.26229 19.6907 8.29392 19.3496 7.30587 19.4012C6.31781 19.4527 5.39015 19.8926 4.725 20.625H3.75V16.875Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Shipment;
