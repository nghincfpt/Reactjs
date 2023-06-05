import React from 'react';
function Contact () {    
    return (            
        <section id="contact"> 
            <div className="container">                   
                {/* Contact Heading*/}                    
                <h2 className="heading text-center text-uppercase text-secondary mb-2">Contact Me</h2>                                     
                {/* Contact Form*/}                    
                <div className="row">                        
                    <div className="col-12 mx-auto">                            
                        <form name="sentMessage">
                            <div className="control-group">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input className="form-control" id="name" type="text" placeholder="Your Name"/>
                                    <p className="help-block text-danger" />
                                </div>                                
                            </div>                               
                            <div className="control-group">                                    
                                <div className="form-group">                                        
                                    <label>Email</label>                                        
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" />                                        
                                    <p className="help-block text-danger" />                                    
                                </div>                                
                            </div>                                
                            <div className="control-group">                                    
                                <div className="form-group">                                        
                                    <label>Phone Number</label>                                        
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required"/>
                                    <p className="help-block text-danger" />                                    
                                </div>                                
                            </div>                                
                            <div className="control-group">                                    
                                <div className="form-group">                                        
                                    <label>Message</label>                                        
                                    <textarea className="form-control" id="message" rows={5} placeholder="Your Message"/>                                        
                                    <p className="help-block text-danger" />                                    
                                </div>                                
                            </div>                                                                                         
                            <div className="form-group">
                                <button className="btn btn-primary" id="send" type="submit">Send</button>
                            </div>                          
                        </form>                        
                    </div>                    
                </div>                
            </div>           
        </section>        
    );    
}
export default Contact;
