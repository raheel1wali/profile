import React from "react";


const Contact = () => {
    return (
        <>
            {/* <!-- section contact --> */}
            <section id="contact" class="shadow-blue white-bg padding">
                <h3 class="section-title">Get in touch</h3>
                <div class="spacer" data-height="80"></div>

                <div class="row">

                    <div class="col-md-12 mb-12 mb-md-0 row">
                        {/* <!-- contact info --> */}
                        <div class="col-md-4">
                            <div class="contact-info mb-5">
                                <i class="icon-phone"></i>
                                <div class="details">
                                    <h5>Phone</h5>
                                    <span><a href="tel:2817388149">+1 832 (945) 8990</a></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-info mb-5">
                                <i class="icon-envelope"></i>
                                <div class="details">
                                    <h5>Email address</h5>
                                    <span><a href="mailto:raheel2wali@gmail.com">raheel2wali@gmail.com</a></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-info">
                                <i class="icon-location-pin"></i>
                                <div class="details">
                                    <h5>Location</h5>
                                    <span>Houston, TX</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-info">
                                <i class="icon-globe"></i>
                                <div class="details">
                                    <h5>Profile Website</h5>
                                    <span><a href="http://raheelwali.herokuapp.com">www.raheelwali.herokuapp.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-md-8">
                        
                        <form id="contact-form" class="contact-form" method="post" action="form/contact.php">

                            <div class="messages"></div>

                            <div class="row">
                                <div class="column col-md-6">
                                    
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="InputName" id="InputName" placeholder="Your name" required="required" data-error="Name is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="column col-md-6">
                                    
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required="required" data-error="Email is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="column col-md-12">
                                    
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" required="required" data-error="Subject is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="column col-md-12">
                                    
                                    <div class="form-group">
                                        <textarea name="InputMessage" id="InputMessage" class="form-control" rows="5" placeholder="Message" required="required" data-error="Message is required."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" name="submit" id="submit" value="Submit" class="btn btn-default"><i class="icon-paper-plane"></i>Send Message</button>
                           

                        </form>
                       
                    </div> */}

                </div>

            </section>
        </>
    );
};

export default Contact;