import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  <a href={resumeData.linkedinId} target="_blank">{resumeData.linkedinId}</a>
                </h4>
                <h4>Email :
                 <a href={"mailto:"+resumeData.email} target="_blank">{resumeData.email}</a>
                </h4>
                <h4>My art page :
                  <a href={resumeData.artPage} target="_blank">{resumeData.artPage}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}