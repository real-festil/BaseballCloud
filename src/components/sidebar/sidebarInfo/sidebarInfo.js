import React from "react";
import userPic from "../../../styles/img/userpic.png";

const SidebarInfo = props => (
  <aside className="profile-aside">
    <div className="profile-info">
      <button className="profile-info__edit-btn" onClick={props.onFormOpen}>
        <span className="profile-info__edit-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="38"
            height="38"
            viewBox="0 0 38 38"
          >
            <defs>
              <circle id="b" cx="15" cy="15" r="15"></circle>
              <filter
                id="a"
                width="140%"
                height="140%"
                x="-20%"
                y="-20%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="2"
                ></feGaussianBlur>
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0.282352941 0 0 0 0 0.733333333 0 0 0 0 1 0 0 0 0.8 0"
                ></feColorMatrix>
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(4 4)">
                <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
                <use fill="#48BBFF" xlinkHref="#b"></use>
              </g>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M20.462 15.003l2.441 2.453-6.18 6.209-2.439-2.453 6.178-6.21zm4.293-.592l-1.088-1.094a1.077 1.077 0 0 0-1.526 0l-1.043 1.048 2.44 2.453 1.217-1.222a.84.84 0 0 0 0-1.185zM13.007 24.66c-.045.2.136.38.336.332l2.72-.663-2.44-2.453-.616 2.784z"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <div className="profile-info__userpic">
        <img
          src={userPic}
          alt="userpic"
          width="100"
          height="100"
          className="profile-info__userpic-img"
        />
      </div>
      <div className="profile-info__personal">
        <div className="profile-info__name">Dmitriy Kryhtin</div>
        <div className="profile-info__position">Pitcher</div>
        <div className="profile-info__position">Pitcher</div>
      </div>
    </div>
    <ul className="profile-info__list">
      <li className="profile-info__item">
        <div className="profile-info__item-name">
          <span className="profile-info__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
            >
              <g fill="#35C32A" fillRule="nonzero">
                <path d="M19.353 7.778l-2.647 5.444h1.783c-1.123 3.603-4.405 6.222-8.278 6.222-4.796 0-8.699-4.012-8.699-8.944 0-4.932 3.903-8.945 8.699-8.945 3.695 0 6.852 2.387 8.11 5.737l.869-1.788C17.46 2.228 14.084 0 10.21 0 4.581 0 0 4.71 0 10.5S4.58 21 10.211 21c4.714 0 8.684-3.305 9.854-7.778H22l-2.647-5.444z"></path>
                <path d="M4.4 13.263h.848l.258-1.135H6.54l.28 1.135H7.7l-1.121-4.42H5.506L4.4 13.262zm1.438-2.82c.06-.257.113-.591.166-.853h.011c.054.262.118.59.183.853l.225.939h-.8l.215-.94zM10.929 9.653c.41 0 .666.083.871.185l.178-.784c-.183-.102-.556-.212-1.039-.212-1.227 0-2.132.822-2.139 2.262-.005.636.184 1.2.528 1.575.345.385.839.584 1.523.584.493 0 .989-.141 1.249-.244v-2.28h-1.394v.764h.579v.905c-.068.04-.223.065-.418.065-.695 0-1.177-.528-1.177-1.42 0-.938.532-1.4 1.239-1.4zM15.328 9.662v-.82H13.2v4.421h2.2v-.819h-1.417v-1.05h1.269v-.814h-1.27v-.918z"></path>
              </g>
            </svg>
          </span>
          Age
        </div>
        <div className="profile-info__item-value">29</div>
      </li>
      <li className="profile-info__item">
        <div className="profile-info__item-name">
          <span className="profile-info__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="23"
              viewBox="0 0 12 23"
            >
              <g fill="#48BBFF" fillRule="nonzero">
                <ellipse cx="6" cy="1.643" rx="1.636" ry="1.643"></ellipse>
                <path d="M11.992 12.151c-.548-5.964-3.48-7.154-3.48-7.154s-2.834-1.651-5.817.452C.76 7.156.314 9.76.008 12.276c-.154 1.279 1.909 1.264 2.062 0 .182-1.501.443-3.01 1.212-4.294l-.004 1.45-.014 6.965v5.527c0 .594.45 1.076 1.08 1.076.63 0 1.142-.482 1.142-1.076v-7.9h1.01v7.925c0 1.289 2.061 1.289 2.061 0v-5.552l.087-6.98.002-1.675C9.47 9.05 9.742 10.604 9.93 12.15c.155 1.264 2.217 1.279 2.063 0z"></path>
              </g>
            </svg>
          </span>
          Height
        </div>
        <div className="profile-info__item-value">7 ft 10 in</div>
      </li>
      <li className="profile-info__item">
        <div className="profile-info__item-name">
          <span className="profile-info__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="17"
              viewBox="0 0 14 17"
            >
              <g fill="#9948FF" fillRule="nonzero">
                <path d="M7.431 10.04C7.294 10.493 7 11.481 7 11.635c0 .202.223.365.5.365.276 0 .5-.163.5-.365 0-.154-.294-1.143-.431-1.595-.007-.024-.036-.04-.07-.04-.032 0-.06.016-.068.04z"></path>
                <path d="M11.532 6.13c.96 0 1.86-.457 2.426-1.229a.22.22 0 0 0 .018-.23.22.22 0 0 0-.198-.121h-3.436c1.781-.806 2.97-2.23 2.97-3.858 0-.11-.007-.218-.02-.325A.416.416 0 0 0 12.879 0H1.122a.417.417 0 0 0-.415.367 2.996 2.996 0 0 0-.019.325c0 1.628 1.189 3.052 2.97 3.858H.223a.22.22 0 0 0-.197.12.22.22 0 0 0 .017.231A3.004 3.004 0 0 0 2.468 6.13H6.23v1.269H5.204A2.995 2.995 0 0 0 2.24 9.927l-.806 5.169a.794.794 0 0 0 .304.755H.773a.576.576 0 0 0-.578.575c0 .317.259.574.578.574h12.454c.32 0 .578-.257.578-.574a.576.576 0 0 0-.578-.575h-.964a.795.795 0 0 0 .304-.755l-.806-5.17A2.995 2.995 0 0 0 8.797 7.4H7.77V6.13h3.762zm-1.877 5.587A2.648 2.648 0 0 1 7 14.36a2.648 2.648 0 0 1-2.655-2.642A2.648 2.648 0 0 1 7 9.076a2.648 2.648 0 0 1 2.655 2.641z"></path>
              </g>
            </svg>
          </span>
          Weight
        </div>
        <div className="profile-info__item-value">180lbs</div>
      </li>
      <li className="profile-info__item">
        <div className="profile-info__item-name">
          <span className="profile-info__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fill="#FFD01A"
                fillRule="nonzero"
                d="M4.643 15.388l.777.252c-.147.435-.36.894-.574 1.353 0 0-.392-.239-.667-.367a9.158 9.158 0 0 1-3.637-4.553 9.094 9.094 0 0 1 .134-6.537c.459.215.918.43 1.334.736l-.458.625.6.392.458-.625c.508.35.881.748 1.28 1.214l-.6.447.447.6.6-.447c.306.423.66.98.857 1.52l-.672.245.245.674.672-.245c.13.563.258 1.127.32 1.715l-.746.043.043.747.747-.043c-.006.613-.103 1.183-.2 1.752l-.753-.184-.207.686zM13.05 1.032a9.262 9.262 0 0 1 4.347 4.83c.711 1.954.725 4.085.097 5.917-.06.251-.232.619-.232.619-.434-.148-.917-.43-1.31-.669l.459-.624-.6-.393-.458.625c-.508-.35-.881-.748-1.28-1.213l.6-.447-.447-.6-.6.446c-.306-.423-.66-.98-.857-1.52l.673-.244-.246-.674-.672.245c-.197-.54-.283-1.195-.387-1.691l.746-.043-.044-.747-.746.042c.006-.612.103-1.182.2-1.752l.753.185.183-.754-.753-.184c.146-.435.36-.894.574-1.354zm2.121 11.898l.348-.509c.46.215.943.497 1.402.712a9.055 9.055 0 0 1-4.908 4.304c-2.219.808-4.53.734-6.525-.143.213-.46.402-.986.591-1.513l.594.166.207-.687-.66-.14c.14-.662.212-1.3.193-1.98l.679-.017-.044-.748-.678.018c-.062-.588-.173-1.31-.394-1.917l.673-.245-.245-.674-.673.245c-.22-.607-.576-1.164-.931-1.722l.531-.422-.447-.6-.531.422a8.262 8.262 0 0 0-1.42-1.391l.415-.533-.6-.392-.348.508c-.484-.282-.967-.564-1.426-.779A9.055 9.055 0 0 1 5.882.59a9.055 9.055 0 0 1 6.526.143c-.213.46-.403.986-.592 1.513l-.66-.141-.208.686.661.141a8.26 8.26 0 0 0-.194 1.979l-.679.018.044.747.679-.018c.062.588.172 1.311.393 1.917l-.672.245.245.674.672-.245c.221.607.601 1.232.932 1.722l-.532.423.447.6.624-.38a8.26 8.26 0 0 0 1.42 1.392l-.416.532.6.393z"
              ></path>
            </svg>
          </span>
          Throws
        </div>
        <div className="profile-info__item-value">R</div>
      </li>
      <li className="profile-info__item">
        <div className="profile-info__item-name">
          <span className="profile-info__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="#FF5656"
                fillRule="nonzero"
                d="M9.148 12.114L.524 3.462a1.57 1.57 0 0 1 0-2.215L1.31.46a1.557 1.557 0 0 1 2.207 0L12.14 9.11c1.138 1.142 2.7 4.024 3.74 5.256.514.607 2.246 2.252 2.246 2.252a1.056 1.056 0 0 1 1.496 0 1.064 1.064 0 0 1 0 1.501l-1.496 1.502a1.056 1.056 0 0 1-1.497 0 1.064 1.064 0 0 1 0-1.502s-1.639-1.737-2.245-2.252c-1.227-1.044-4.1-2.612-5.237-3.754z"
              ></path>
            </svg>
          </span>
          Bats
        </div>
        <div className="profile-info__item-value">R</div>
      </li>
    </ul>
  </aside>
);

export default SidebarInfo;
