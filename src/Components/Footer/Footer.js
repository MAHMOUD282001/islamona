import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer className="d-flex align-items-center text-center justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="all-rights">
              كل الحقوق محفوظة ل{" "}
              <a
                class=""
                href="https://my-new-portfolio-site.netlify.app/"
                target="_blank"
              >
                Mahmoud Khallaf
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
