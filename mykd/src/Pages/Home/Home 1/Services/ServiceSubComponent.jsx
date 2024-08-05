import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RxArrowTopRight } from "react-icons/rx";
import "./subservice.css";

function ServiceSubComponent(props) {
  return (
    <div className="subserviceSection ">
      <Container fluid={'md'} className="srContent">
        <Row>
          <Col className="sRHead">
            <span>Our Services</span>
            <h2>From Your Cyber Security Services.</h2>
          </Col>
        </Row>
        <Row>
          <Col className="subservice-info">
            <div className="subserviceCard">
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_418_20)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.7999 0H89.5499V60.75H85.5882V30.375C85.5882 15.7875 73.7626 3.96196 59.1749 3.96196C44.5874 3.96196 32.7619 15.7874 32.7619 30.375V60.75H28.7999V0ZM61.2 29.25V90H0.449951L0.449956 29.25H4.41191V59.625C4.41191 74.2126 16.2374 86.0382 30.825 86.0382C45.4126 86.0382 57.2381 74.2126 57.2381 59.625V29.25H61.2Z"
                        fill="url(#paint0_linear_418_20)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_418_20"
                        x1={12.7012}
                        y1={8.55}
                        x2={67.5067}
                        y2={77.9904}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFD9A0" />
                        <stop offset={1} stopColor="#FFF5F1" />
                      </linearGradient>
                      <clipPath id="clip0_418_20">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/">
                    Endpoint Security
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a
                  class="read-more text-decoration-none"
                  href="/service-details"
                >
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>

            <div className="subserviceCard">
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_419_41)">
                      <mask
                        id="mask0_419_41"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={90}
                        height={90}
                        style={{
                          maskType: "luminance",
                        }}
                      >
                        <path d="M0 0L0 90H90V0H0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_419_41)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.4651 78.5938L19.465 90H25.535V78.5938C25.535 74.1429 29.1432 70.5348 33.5941 70.5348H33.616H45H56.3832H56.4061C60.8566 70.5348 64.4652 74.1429 64.4652 78.5938V90H70.5348V78.5938C70.5348 74.1429 74.1433 70.5348 78.5943 70.5348H78.6159H90V64.4652H78.6159H78.5943C74.1433 64.4652 70.5348 60.8571 70.5348 56.4062V45V33.594C70.5348 29.1431 74.1433 25.5349 78.5943 25.5349L78.6159 25.5349H90V19.4651H78.6159H78.5943C74.1433 19.4651 70.5348 15.8569 70.5348 11.406V0L64.4652 2.6532e-07V11.406C64.4652 15.8569 60.8566 19.4651 56.4061 19.4651H56.3841H45H33.616H33.5941C29.1432 19.4651 25.535 15.8569 25.535 11.406V1.96701e-06L19.465 2.23234e-06V11.406C19.465 15.8569 15.8568 19.4651 11.4059 19.4651L11.384 19.4651H0L3.37725e-08 25.5349H11.3834L11.4059 25.5349C15.8568 25.5349 19.4651 29.1431 19.4651 33.594L19.465 45L19.4651 56.4062C19.4651 60.8571 15.8568 64.4652 11.4059 64.4652H11.384H0L3.37725e-08 70.5348H11.3834H11.4059C15.8568 70.5348 19.4651 74.1429 19.4651 78.5938ZM64.4652 45V33.594C64.4652 29.1431 60.8566 25.5349 56.4061 25.5349L56.3832 25.5349H45H33.616L33.5941 25.5349C29.1432 25.5349 25.535 29.1431 25.535 33.594V45V56.4062C25.535 60.8571 29.1432 64.4652 33.5941 64.4652H33.616H45H56.3841H56.4061C60.8566 64.4652 64.4652 60.8571 64.4652 56.4062V45Z"
                          fill="url(#paint0_linear_419_41)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_419_41"
                        x1={-0.00000108239}
                        y1={45}
                        x2={90}
                        y2={45}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A7B5FF" />
                        <stop offset={1} stopColor="#F3ACFF" />
                      </linearGradient>
                      <clipPath id="clip0_419_41">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/service-details">
                    Security Consulting
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a class="read-more text-decoration-none" href="/">
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>

            <div className="subserviceCard">
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_419_47)">
                      <mask
                        id="mask0_419_47"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={90}
                        height={90}
                        style={{
                          maskType: "luminance",
                        }}
                      >
                        <path d="M90 0H0V90H90V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_419_47)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M59.4612 74.0416C55.0944 81.3199 49.8136 84.6 45 84.6C40.1862 84.6 34.9055 81.3199 30.5386 74.0416C26.2361 66.8709 23.4 56.6158 23.4 45C23.4 33.384 26.2361 23.1292 30.5386 15.9585C34.9055 8.68027 40.1862 5.4 45 5.4C49.8136 5.4 55.0944 8.68027 59.4612 15.9585C63.7636 23.1292 66.6 33.384 66.6 45C66.6 56.6158 63.7636 66.8709 59.4612 74.0416ZM90 45C90 20.1472 69.8526 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8526 20.1472 90 45 90C69.8526 90 90 69.8526 90 45ZM5.4 45C5.4 61.1685 15.0897 75.0735 28.9788 81.225C22.3192 73.03 18 59.8559 18 45C18 30.1443 22.3192 16.9699 28.9788 8.77477C15.0897 14.9265 5.4 28.8317 5.4 45ZM84.6 45C84.6 61.1685 74.9101 75.0735 61.0213 81.225C67.6809 73.03 72 59.8559 72 45C72 30.1443 67.6809 16.9699 61.0213 8.77477C74.9101 14.9265 84.6 28.8317 84.6 45ZM45 49.95C47.7337 49.95 49.95 47.7337 49.95 45C49.95 42.2662 47.7337 40.05 45 40.05C42.2662 40.05 40.05 42.2662 40.05 45C40.05 47.7337 42.2662 49.95 45 49.95Z"
                          fill="url(#paint0_linear_419_47)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_419_47"
                        x1={45}
                        y1={0}
                        x2={45}
                        y2={90}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B8DBFC" />
                        <stop offset={1} stopColor="#F8FBFE" />
                      </linearGradient>
                      <clipPath id="clip0_419_47">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/service-details">
                    Security Consulting
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a class="read-more text-decoration-none" href="/">
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>

            <div className="subserviceCard">
              {" "}
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_419_101)">
                      <mask
                        id="mask0_419_101"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={90}
                        height={90}
                        style={{
                          maskType: "luminance",
                        }}
                      >
                        <path d="M90 0H0V90H90V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_419_101)">
                        <path
                          d="M45 90C41.25 90 38.125 88.789 35.625 86.3671C33.125 83.9453 31.875 81.0157 31.875 77.5782C31.875 75.6252 32.2656 73.8671 33.0469 72.3046C33.8281 70.7422 35.1953 69.0232 37.1484 67.1485C39.1797 65.2734 40.7812 63.5157 41.9531 61.875C43.2031 60.1564 43.8281 58.6719 43.8281 57.4218V53.203C42.1094 52.8124 40.5859 52.0312 39.2578 50.8595C38.0078 49.6094 37.1875 48.1248 36.7969 46.4062H32.5781C31.25 46.4062 29.6875 47.0313 27.8906 48.2814C26.0937 49.531 24.375 51.0547 22.7344 52.8516C21.0938 54.6484 19.4531 55.9764 17.8125 56.8359C16.25 57.6954 14.4531 58.1252 12.4219 58.1252C8.90627 58.1252 5.93748 56.875 3.51562 54.3748C1.17188 51.8751 0 48.7498 0 45C0 41.25 1.17188 38.125 3.51562 35.625C5.93748 33.125 8.90627 31.875 12.4219 31.875C15.7031 31.875 18.5156 33.0469 20.8594 35.3906C23.2031 37.7344 25.3125 39.7265 27.1875 41.3672C29.0625 43.0078 30.8594 43.8281 32.5781 43.8281H36.7969C37.1875 42.0313 38.0078 40.5468 39.2578 39.375C40.5859 38.125 42.1094 37.3437 43.8281 37.0312V32.8125C43.8281 30.7813 42.2656 28.2031 39.1406 25.0781L36.6797 22.6172C33.4766 19.4141 31.875 16.0156 31.875 12.4219C31.875 8.90627 33.125 5.97654 35.625 3.63281C38.2031 1.21094 41.3281 0 45 0C48.7498 0 51.8751 1.21094 54.3748 3.63281C56.875 6.05471 58.1252 8.98439 58.1252 12.4219C58.1252 16.4062 56.1717 20.1563 52.2657 23.6719C48.3592 27.2656 46.4062 30.3125 46.4062 32.8125V37.0312C48.2031 37.3437 49.6876 38.125 50.8595 39.375C52.1096 40.5468 52.8907 42.0313 53.203 43.8281H57.4218C60.0781 43.8281 63.1251 41.8359 66.5627 37.8516C70.078 33.8672 73.75 31.875 77.5782 31.875C81.0936 31.875 84.0236 33.1641 86.3671 35.7422C88.789 38.2422 90 41.3281 90 45C90 48.7498 88.789 51.8751 86.3671 54.3748C83.9453 56.875 81.0157 58.1252 77.5782 58.1252C74.2968 58.1252 71.5235 56.992 69.2577 54.7267C66.9924 52.461 64.8828 50.508 62.9298 48.8673C60.9763 47.2266 59.1408 46.4062 57.4218 46.4062H53.203C52.578 50.1561 50.3127 52.4218 46.4062 53.203V57.4218C46.4062 59.7654 48.3592 62.7737 52.2657 66.4452C56.1717 70.1172 58.1252 73.8279 58.1252 77.5782C58.1252 81.0936 56.8359 84.0236 54.2578 86.3671C51.7576 88.789 48.672 90 45 90Z"
                          fill="url(#paint0_linear_419_101)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_419_101"
                        x1={70.875}
                        y1={14.4}
                        x2={19.8}
                        y2={66.375}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0.0509862} stopColor="#FFB6E1" />
                        <stop offset={1} stopColor="#FBE3EA" />
                      </linearGradient>
                      <clipPath id="clip0_419_101">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/service-details">
                    Security Consulting
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a class="read-more text-decoration-none" href="/">
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>
            <div className="subserviceCard">
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_419_89)">
                      <mask
                        id="mask0_419_89"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={90}
                        height={90}
                        style={{
                          maskType: "luminance",
                        }}
                      >
                        <path d="M90 0H0V90H90V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_419_89)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M46.4143 0C47.4084 0 48.2143 0.805887 48.2143 1.8V19.2037C48.2143 21.1821 50.9422 21.7124 51.6834 19.878L58.2025 3.74155C58.5751 2.81983 59.6241 2.37451 60.5461 2.74691L63.1687 3.80651C64.0903 4.17892 64.5359 5.22801 64.1633 6.14974L57.213 23.3527C56.4781 25.1707 58.7677 26.6863 60.1546 25.2998L73.2739 12.1801C73.9773 11.4772 75.1167 11.4772 75.8196 12.1801L77.8198 14.1802C78.5228 14.8832 78.5228 16.0228 77.8198 16.7258L66.0384 28.5072C64.6321 29.9137 66.2094 32.2258 68.0319 31.4294L83.2995 24.7588C84.2107 24.3608 85.2719 24.7766 85.6696 25.6876L86.8023 28.2796C87.2001 29.1906 86.7843 30.2517 85.8735 30.6497L68.2803 38.3363C66.4929 39.1171 67.0505 41.7857 69.0007 41.7857H88.2C89.194 41.7857 90 42.5916 90 43.5857V46.4143C90 47.4084 89.194 48.2143 88.2 48.2143H69.0012C67.0504 48.2143 66.4933 50.8828 68.2803 51.6636L85.8735 59.3505C86.7843 59.7483 87.2001 60.8094 86.8023 61.7202L85.6696 64.3122C85.2719 65.2234 84.2107 65.6392 83.2995 65.241L68.0319 58.5706C66.2094 57.7741 64.6321 60.0863 66.0384 61.493L77.8198 73.2739C78.5228 73.9773 78.5228 75.1167 77.8198 75.8196L75.8196 77.8198C75.1167 78.5228 73.9773 78.5228 73.2739 77.8198L60.1546 64.7001C58.7677 63.3136 56.4781 64.8292 57.213 66.6472L64.1633 83.8503C64.5359 84.7719 64.0903 85.8208 63.1687 86.1935L60.5461 87.2532C59.6241 87.6253 58.5751 87.1803 58.2025 86.2582L51.6834 70.1221C50.9422 68.2875 48.2143 68.818 48.2143 70.7962V88.2C48.2143 89.194 47.4084 90 46.4143 90H43.5857C42.5916 90 41.7857 89.194 41.7857 88.2V70.7962C41.7857 68.818 39.0579 68.2875 38.3168 70.1221L31.7972 86.2582C31.4248 87.1803 30.3757 87.6253 29.454 87.2532L26.8314 86.1935C25.9097 85.8208 25.4644 84.7719 25.8368 83.8503L32.7872 66.6472C33.5218 64.8292 31.2321 63.3136 29.8455 64.7001L16.7258 77.8198C16.0229 78.5228 14.8832 78.5228 14.1803 77.8198L12.1801 75.8196C11.4772 75.1167 11.4772 73.9773 12.1801 73.2739L23.9616 61.4925C25.368 60.0862 23.7907 57.7741 21.9681 58.5706L6.70027 65.241C5.78934 65.6392 4.72819 65.2234 4.33019 64.3122L3.19773 61.7202C2.79972 60.8094 3.21556 59.7483 4.12652 59.3505L21.7196 51.6636C23.5068 50.8828 22.9493 48.2143 20.9989 48.2143H1.8C0.805887 48.2143 0 47.4084 0 46.4143V43.5857C0 42.5916 0.805887 41.7857 1.8 41.7857H20.999C22.9494 41.7857 23.5069 39.1171 21.7197 38.3363L4.1265 30.6497C3.21554 30.2517 2.79971 29.1906 3.19772 28.2796L4.33018 25.6876C4.72819 24.7766 5.78929 24.3608 6.70027 24.7588L21.9681 31.4294C23.7907 32.2258 25.368 29.9137 23.9616 28.5072L12.1801 16.7258C11.4772 16.0229 11.4772 14.8832 12.1801 14.1802L14.1802 12.1801C14.8832 11.4772 16.0229 11.4772 16.7258 12.1801L29.8455 25.2998C31.232 26.6863 33.5218 25.1708 32.7872 23.3527L25.8368 6.14974C25.4644 5.22801 25.9097 4.17892 26.8314 3.80651L29.454 2.74691C30.3757 2.37451 31.4248 2.81983 31.7972 3.74155L38.3168 19.878C39.0579 21.7124 41.7857 21.1821 41.7857 19.2037V1.8C41.7857 0.805887 42.5916 0 43.5857 0H46.4143ZM45 64.2856C55.6511 64.2856 64.2856 55.6511 64.2856 45C64.2856 34.3488 55.6511 25.7143 45 25.7143C34.3488 25.7143 25.7143 34.3488 25.7143 45C25.7143 55.6511 34.3488 64.2856 45 64.2856Z"
                          fill="url(#paint0_linear_419_89)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_419_89"
                        x1={9.225}
                        y1={7.2}
                        x2={45}
                        y2={90}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ACAAFF" />
                        <stop offset={1} stopColor="#C0E8FF" />
                      </linearGradient>
                      <clipPath id="clip0_419_89">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/service-details">
                    Security Consulting
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a class="read-more text-decoration-none" href="/">
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>

            <div className="subserviceCard">
              <div className="subserviec-content">
                <div className="icoon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={90}
                    height={90}
                    viewBox="0 0 90 90"
                    fill="none"
                    {...props}
                  >
                    <g clipPath="url(#clip0_419_95)">
                      <mask
                        id="mask0_419_95"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={90}
                        height={90}
                        style={{
                          maskType: "luminance",
                        }}
                      >
                        <path d="M90 0H0V90H90V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_419_95)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M45 90C69.8526 90 90 69.8526 90 45C90 20.1472 69.8526 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8526 20.1472 90 45 90ZM45 84.6C66.8704 84.6 84.6 66.8704 84.6 45C84.6 23.1295 66.8704 5.4 45 5.4C23.1295 5.4 5.4 23.1295 5.4 45C5.4 66.8704 23.1295 84.6 45 84.6ZM45 79.2C63.8883 79.2 79.2 63.8883 79.2 45C79.2 26.1119 63.8883 10.8 45 10.8C26.1119 10.8 10.8 26.1119 10.8 45C10.8 63.8883 26.1119 79.2 45 79.2ZM45 73.8C60.9057 73.8 73.8 60.9057 73.8 45C73.8 29.0942 60.9057 16.2 45 16.2C29.0942 16.2 16.2 29.0942 16.2 45C16.2 60.9057 29.0942 73.8 45 73.8ZM68.4 45C68.4 57.9235 57.9235 68.4 45 68.4C32.0765 68.4 21.6 57.9235 21.6 45C21.6 32.0765 32.0765 21.6 45 21.6C57.9235 21.6 68.4 32.0765 68.4 45ZM63 45C63 54.9409 54.9409 63 45 63C35.0589 63 27 54.9409 27 45C27 35.0589 35.0589 27 45 27C54.9409 27 63 35.0589 63 45Z"
                          fill="url(#paint0_linear_419_95)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_419_95"
                        x1={12.375}
                        y1={8.55}
                        x2={67.05}
                        y2={78.525}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFD9A0" />
                        <stop offset={1} stopColor="#FFF5F1" />
                      </linearGradient>
                      <clipPath id="clip0_419_95">
                        <rect width={90} height={90} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <a class="text-decoration-none" href="/service-details">
                    Security Consulting
                  </a>
                </h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a class="read-more text-decoration-none" href="/">
                  Read More{<RxArrowTopRight />}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceSubComponent;
