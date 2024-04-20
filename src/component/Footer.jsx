const Footer =()=>{
    return(
        <div className="bg-[#181818]  pb-7 ">
            <div className="pl-72 pt-16 flex gap-28">
               <div className="">
                <div className="flex gap-2 mb-2">  <div>
                  <svg width="24" height="36" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_674_19294)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3819 14.7977C20.5245 13.9563 20.3574 13.3121 19.9261 12.9756C19.2787 12.4711 18.3021 12.1959 15.9859 12.204C14.2724 12.2082 12.4327 12.2167 11.6469 12.2205C11.5739 12.2082 11.3093 12.1181 11.297 11.7938L11.2683 6.64781C11.2683 6.3236 11.5207 6.05694 11.8385 6.05694C12.1559 6.05694 12.412 6.31936 12.412 6.64358C12.412 6.64358 12.4285 9.43839 12.4327 10.4314C12.4327 10.5257 12.4897 10.7513 12.7011 10.8089C14.085 11.1822 21.0778 10.883 20.9639 9.57764C20.3536 4.16496 15.8884 -0.0164585 10.4829 4.87055e-05C8.78164 0.00385807 7.16965 0.426698 5.745 1.16952C2.33815 2.98744 -0.0755529 6.63977 0.00180748 10.8542C0.0546894 13.8374 1.98811 19.1396 3.16037 19.923C3.70173 20.2845 4.40996 20.1491 7.58886 20.1368C9.0298 20.1325 10.3732 20.1325 11.0324 20.1325C11.1016 20.1448 11.4599 20.2312 11.4637 20.5677L11.484 24.4782C11.484 24.8024 11.232 25.0691 10.9142 25.0691C10.5968 25.0691 10.3402 24.8109 10.3402 24.4824C10.3402 24.4824 10.3647 22.9108 10.3609 22.328C10.3609 22.1926 10.3689 21.9585 9.98235 21.7862C8.71622 21.2119 4.60532 21.5729 4.37737 22.2129C4.29191 22.4592 4.75185 23.4073 5.46418 24.6259C7.83331 28.4425 10.1571 31.4176 10.5318 31.8937C10.5563 31.9141 10.5766 31.9348 10.5968 31.9471C10.9104 31.5611 19.1078 22.2747 20.3819 14.7977Z" fill="white"></path></g><defs><filter id="filter0_b_674_19294" x="-9.26002" y="-9.26002" width="39.4853" height="50.4673" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="4.63001"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_674_19294"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_674_19294" result="shape"></feBlend></filter></defs></svg>
                  </div>
                  <div className="text-white font-bold text-2xl">
                    Swiggy
                  </div> </div>
                 
                  <div className=" text-[#dadada]">
                  © 2023 Bundl Technologies <br/> Pvt. Ltd
                  </div>
               </div>

               <div>
                <h3 className="text-white text-lg font-bold">Company</h3>
                <ul  className="text-white list-none">
                    <li className="font-color mb-1">About</li>
                    <li className="font-color mb-1">Careers</li>
                    <li className="font-color mb-1">Team</li>
                    <li className="font-color mb-1">Swiggy One</li>
                    <li className="font-color mb-1">Swiggy Instamart</li>
                    <li className="font-color mb-1">Swiggy Genie</li>
                </ul>
               </div>

               <div>
                <div>
                  <h2 className="text-white text-lg font-bold">Contact us</h2>
                  <ul className="text-white list-none">
                    <li className="font-color mb-1">Help & Support</li>
                    <li className="font-color mb-1">Partner with us</li>
                    <li className="font-color mb-1">Ride with us</li>
                  </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-bold">Legal</h2>
                    <ul className="text-white list-none">
                        <li className="font-color mb-1">Term & Conditions</li>
                        <li className="font-color mb-1">Cookie Policy</li>
                        <li className="font-color mb-1">Privacy Policy</li>
                    </ul>
                </div>
               </div>




               <div>
                <h2  className="text-white text-lg font-bold">We deliver to:</h2>
                <ul className="text-white list-none">
                    <li className="font-color mb-1">Bangalore</li>
                    <li className="font-color mb-1">Gurgaon</li>
                    <li className="font-color mb-1">Hyderabad</li>
                    <li className="font-color mb-1">Delhi</li>
                    <li className="font-color mb-1">Mumbai</li>
                    <li className="font-color mb-1">Pune</li>
                </ul>
                 <button className="flex  justify-between border mt-2 rounded-lg px-1 py-1 border-inherit text-[#dadada]"><div className="mr-7">589 cities</div>
                 <div className="mt-1 mr-1"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" aria-hidden="true" strokeColor="rgba(255, 255, 255, 0.92)" fillColor="rgba(255, 255, 255, 0.6)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.30875 4.27703C0.931854 4.60108 0.889014 5.16932 1.21307 5.54622L4.57534 9.45679C4.58439 9.46731 4.59351 9.47793 4.6027 9.48863C4.75431 9.66514 4.92366 9.86231 5.08944 10.0078C5.28433 10.1788 5.5905 10.385 6.01603 10.385C6.44156 10.385 6.74773 10.1788 6.94262 10.0078C7.1084 9.86232 7.27776 9.66515 7.42937 9.48865C7.43856 9.47795 7.44768 9.46733 7.45673 9.4568L10.7864 5.58418C11.1105 5.20729 11.0677 4.63905 10.6908 4.31499C10.3139 3.99093 9.74563 4.03377 9.42157 4.41066L6.09187 8.28328C6.06476 8.3148 6.0396 8.34406 6.01604 8.37135C5.99247 8.34406 5.96732 8.3148 5.94021 8.28328L2.57794 4.37271C2.25389 3.99581 1.68565 3.95297 1.30875 4.27703Z" fill="rgba(255, 255, 255, 0.6)" fill-opacity="0.92"></path></svg></div></button>
               </div>
            </div>
        </div>
    )
}
export default Footer;