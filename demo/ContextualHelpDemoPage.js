import React, { Component } from 'react';
import { Button, TextInput, MultiLineText } from '@pearson-components/elements-sdk/build/dist.elements-sdk';
import { ContextualHelp } from '../index';

import { addTopics, removeTopics, setUpdate } from '../index';
import { demoAddTopic } from '../src/js/topicsList';

import './ContextualHelpDemoPage.css';

class ContextualHelpDemoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'en-us',
      testTopics: [
        'console/student/freetrial',
        'pi/forgot_creds_next',
        'contactsupport'
      ],
      showHelp: false,
      directTopic: undefined
    };
    
    this.handleHelp = _handleHelp.bind(this);
  }

  render() {
    return (
      <div className="demo-container">
        <table className="demo-table">
          <tbody>
            <tr>
              <td>
                <Button 
                  btnType="cta"
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={() => {
                    this.setState({showHelp: true});
                  }}
                >Show Help
                </Button>
              </td>
              <td>
                  Opens the drawer with the Help Index displayed.
                  This is done by setting the <b>showHelp</b> prop (via local state) to true. 
                  The drawer is closed via the 'x' on the drawer.
              </td>
            </tr>
            <tr>
              <td>
                <Button 
                  btnType="cta" 
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={() => { 
                    this.setState({
                      directTopic: 'console/student/studentresources',
                      showHelp: true
                    });
                  }}
                >Direct to topic
                </Button>
                </td>
                <td>
                  Opens the drawer directly to a specific topic.
                  This is done by setting the directTopic prop to the Help Topic of interest and setting the <b>showHelp</b> prop to true.
                  Note that the <b>directTopic</b> prop needs to be cleared to allow the drawer to go back to normal operation. Consider
                  doing this in the handleHelp function that closes the drawer.
                </td>
            </tr>
            <tr>
              <td>
                <Button 
                  btnType="cta" 
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={() => { 
                    this.setState({
                      testTopics: [...this.state.testTopics, 'console/instructor/courseregsettings']
                    });
                  }}
                >Add to state
                </Button>
                </td>
              <td>
                Adds one topic to the Help Index via the <b>topics</b> prop.
                This allows the parent control to maintain an array of topics that will be presented in the drawer.
                This may be done while the drawer is open.
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  btnType="cta"
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={() => {
                    this.setState({
                      testTopics: this.state.testTopics.filter((topic) => topic !== 'console/instructor/courseregsettings')
                    });
                  }}
                >Remove from state
                </Button>
              </td>
              <td>
                Removes one topic from the Help Index via the <b>topics</b> prop.
                This allows the parent control to maintain an array of topics that will be presented in the drawer.
                This may be done while the drawer is open.
              </td>
            </tr>
            <tr>
              <td>
                <Button 
                  btnType="cta" 
                  btnSize="xlarge" 
                  className="pe-btn--btn_small demo-button"
                  onClick={() => { 
                    addTopics([
                      'console/instructor/educatorresources',
                      'console/student/studentresources'              
                    ])
                  }}
                >addTopics()
                </Button>
              </td>
              <td>
                Adds two topics to the Help Index by calling <b>addTopics()</b>.
                This accepts either a single topic (string) or an array of topics (array of strings).
                This may be done while the drawer is open.
              </td>
            </tr>
            <tr>
              <td>
                <Button 
                  btnType="cta" 
                  btnSize="xlarge" 
                  className="pe-btn--btn_small demo-button"
                  onClick={() => { 
                    removeTopics([
                      'console/instructor/educatorresources',
                      'console/student/studentresources'              
                    ])
                  }}
                >removeTopics()
                </Button>
              </td>
              <td>
                Removes two topics from the Help Index by calling <b>removeTopics()</b>.
                This accepts either a single topic (string) or an array of topics (array of strings).
                This may be done while the drawer is open.
              </td>
            </tr>
            <tr>
              <td>
                <Button 
                  btnType="cta" 
                  btnSize="xlarge" 
                  className="pe-btn--btn_small demo-button"
                  onClick={() => { 
                    this.setState({
                      language: this.state.language === 'en-us' ? 'fr' : 'en-us'
                    });
                  }}
                >French / English
                </Button>
              </td>
              <td>
                Toggles between English and French. Setting the language is done via the <b>language</b> prop.
                Topics that are not available in the specified language will not be displayed.
                However, the reference to the topic is maintained, so switching to a language that 
                includes that topic will be displayed.
                Note in this example that not all are available in French.
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  btnType="cta" 
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={
                      () => {
                        document.getElementById("customContent").value = 'Implementing an Accordian within ContextualHelp' +
                        'uses the html5 tags of summary and detail. There would generally be some amount of text that would' +
                        'always be visible above the accordion, which is represented by this text.\n<br/>\n<br/>\n' +
                        'Below there are a couple of accordions\n<br/>\n<br/>\n' +
                        '<details>\n' +
                        '  <summary>Orginaztion</summary>\n' +
                        '  Notice that the summary tag is placed within the details tag. Then the balance of the text, that' +
                        '  gets displayed when the section is expanded, is placed within the details tag.\n' +
                        '</details>\n<br/>\n<br/>\n<details>\n' +
                        '  <summary>Accessibility</summary>\n' +
                        '  Accessibility is addressed automatically by the browser. The summary tags become tab stops' +
                        '  to allow a keyboard user to be able to move between them and to open the section using standard' +
                        '  accessibility techniques.'
                        '</details>';
                        document.getElementById("customTitle").value = 'Accordions';
                        document.getElementById("customExcerpt").value = 'Implementing an Accordian within ContextualHelp';
                      }
                    }
                >Accordion example
                </Button>
              </td>
              <td>
                Loads demonstration code into editor below as an example for using Accodions within a Help Topic.
                Use with 'Test Help Content' to see how it works.
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  btnType="cta"
                  btnSize="xlarge"
                  className="pe-btn--btn_small demo-button"
                  onClick={() => {
                    const tempHelp = {
                      name: 'custom/text/demo/example',
                      title: document.getElementById("customTitle").value,
                      excerpt: document.getElementById("customExcerpt").value,
                      content: document.getElementById("customContent").value,
                      fetching: false,
                      failed: false
                    };
                    removeTopics(tempHelp.name);
                    console.log(tempHelp);
                    setTimeout(() => demoAddTopic(tempHelp), 500);
                  }
                }
                >Test Help Content
                </Button>
              </td>
              <td>
                Enter text below for testing apperance in ContextualHelp.
                Note that this uses an internal function to load the text rather than pulling from a url.&nbsp;
                <u>Do not</u> follow this technique for production code.
              </td>
            </tr>
            <tr>
              <td>
                <TextInput
                  id="customTitle"
                  inputState="default"
                  labelText="topic.title" 
                  placeholder="Custom Title"
                />
              </td>
              <td>
                <MultiLineText 
                  id="customExcerpt"
                  labelText="topic.excerpt"
                  placeholder="Enter topic excerpt here."
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" >
                <MultiLineText 
                  id="customContent"
                  labelText="topic.content"
                  placeholder="Enter topic content here."
                />
          </td>
            </tr>
          </tbody>
        </table>

        <div className="topics-discussion">
          <h2>Topics List</h2>
          <h4>Unique entries</h4>
          <p>
            ContextualHelp will not present a topic more that once. Whenever a topic is added,
            a check is made to see if that topic has already been included.
            If so, it will not be added again. Attempts to remove topics that do not exist will be ignored.
          </p>

          <h4>Two methods</h4>
          <p>
            There are two methods available for maintaining the list of topics presented in the drawer.
          </p>
          <p>
            First, the parent control may maintain an array of topics and simply pass that into ContextualHelp via
            the topics props. Whenever this list is updated, the ContextualHelp will fetch any new topics,
            updating the list when they arrive. It will remove any topics removed from the list.
          </p>
          <p>
            Second, calls may be made to addTopics() and removeTopics() to do as their names imply.
            Both of these methods will accept either a single topic (string) or multiple topics (array of strings).
          </p>
          <p>
            Either or both of these methods may be used as best fits the needs of the client code.
            The resulting list that will be displayed inside the drawer will be a union of these two methods.
            Generally it would be better to not mix these methods for one specific reason.
            If a given topic were added by both techniques, only one instance would be added. Then, if that topic is
            removed by the portion of logic using one technique, the portion of logic using the other technique
            will not be aware of this. This could potentially produce confusing effects.

          </p>
        </div>

        <ContextualHelp
          directTopic={this.state.directTopic}
          drawerTop="61px"
          handleHelp={this.handleHelp}
          language={this.state.language}
          showHelp= {this.state.showHelp}
          topics= {this.state.testTopics}
        />
      </div>
    )
  }
}

function _handleHelp() {
  this.setState({
    showHelp: !this.state.showHelp,
    directTopic: this.state.showHelp ? undefined : this.state.directTopic
  });
};

export default ContextualHelpDemoPage;