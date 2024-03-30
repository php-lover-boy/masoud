import { FunctionComponent } from "react";
import styles from "./CVResume.module.css";
const CVResume: FunctionComponent = () => {
  return (
    <div className={styles.cvresume}>
      <div className={styles.cvresumeChild} />
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeChild} />
        <div className={styles.industryKnowledge}>
          <div className={styles.industryKnowledgeChild} />
          <b className={styles.industryKnowledge1}>Industry Knowledge</b>
          <div className={styles.userInterface}>User Interface</div>
          <div className={styles.userExperience}>User Experience</div>
          <div className={styles.productDesign}>Product Design</div>
          <div className={styles.interactionDesign}>Interaction Design</div>
          <div className={styles.designResearch}>Design Research</div>
          <div className={styles.webDesign}>Web Design</div>
          <img className={styles.circleIcon} alt="" src="/circle.svg" />
        </div>
        <div className={styles.languages}>
          <div className={styles.languagesChild} />
          <b className={styles.industryKnowledge1}>Languages</b>
          <div className={styles.hindi}>
            <div className={styles.bachelorOfEngineering}>Persian</div>
            <img className={styles.circleIcon1} alt="" src="/circle1.svg" />
          </div>
          <div className={styles.french}>
            <div className={styles.bachelorOfEngineering}>Azari</div>
            <img className={styles.circleIcon1} alt="" src="/circle2.svg" />
          </div>
          <div className={styles.english}>
            <div className={styles.bachelorOfEngineering}>English</div>
            <img className={styles.circleIcon1} alt="" src="/circle3.svg" />
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.socialChild} />
          <b className={styles.social1}>Social</b>
          <div className={styles.userInterface}>Yoursitename.com</div>
          <div className={styles.userExperience}>https://www.linkedin.com/in/masoud-zivari/</div>

        </div>
        <div className={styles.hobbies}>
          <div className={styles.hobbiesChild} />
          <b className={styles.hobbies1}>Hobbies</b>
          <div className={styles.reading}>
            <img className={styles.readingIcon} alt="" src="/reading.svg" />
            <b className={styles.reading1}>Reading</b>
          </div>
          <div className={styles.dancing}>
            <b className={styles.dance}>Dance</b>
            <img className={styles.danceIcon} alt="" src="/dance.svg" />
          </div>
          <div className={styles.singing}>
            <b className={styles.dance}>Singing</b>
            <img className={styles.singingIcon} alt="" src="/singing.svg" />
          </div>
          <div className={styles.football}>
            <b className={styles.dance}>Football</b>
            <img className={styles.footballIcon} alt="" src="/football.svg" />
          </div>
        </div>
        <div className={styles.yourMail}>
          <div className={styles.yourMailChild} />
          <img className={styles.mdiMailIcon} alt="" src="/mdi-mail.svg" />
          <div className={styles.m20zivarigmailcom}>
            m20zivari@gmailcom
          </div>
        </div>
        <div className={styles.yourContact}>
          <div className={styles.yourMailChild} />
          <div className={styles.div}>+1 (123) 12345678</div>
          <img className={styles.mdiMailIcon} alt="" src="/mdi-call.svg" />
        </div>
        <div className={styles.yourSite}>
          <div className={styles.yourMailChild} />
          <div className={styles.m20zivarigmailcom}>
            www.yoursitename.com
          </div>
          <img className={styles.mdiMailIcon} alt="" src="/website.svg" />
        </div>
        <div className={styles.yourLocation}>
          <div className={styles.yourMailChild} />
          <div className={styles.m20zivarigmailcom}>Tehran</div>
          <img
            className={styles.mdiLocationOnIcon}
            alt=""
            src="/mdi-location-on.svg"
          />
        </div>
        <div className={styles.profile}>
          <div className={styles.Masoud}>Masoud</div>
          <div className={styles.Zivari}>Zivari</div>
          <b className={styles.uiuxDesigner}>Full stack Web Developer</b>
          <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
        </div>
      </div>
      <div className={styles.educationAndSkill}>
        <div className={styles.educationAndSkillChild} />
        <div className={styles.experience}>
          <div className={styles.experience1}>
            <div className={styles.experienceChild} />
            <div className={styles.experience2}>EXPERIENCE</div>
            <div className={styles.experienceItem} />
          </div>
          <div className={styles.blueMoon}>
            <b className={styles.blueMoonConsultency}>
              Mofid Securities
            </b>
            <div className={styles.seniourUiDesigner}>Seniour Full Stuck Web Developer</div>
            <div className={styles.aug2020}>
              Aug 2020 - Present - 1 year, Tehran
            </div>
            <div className={styles.productTeamTo}>
              Nodejs, React
            </div>
          </div>
          <div className={styles.blackYark}>
            <b className={styles.blueMoonConsultency}>
              Tehran Securities Exchange Technology
            </b>
            <div className={styles.seniourUiDesigner}>Seniour Full Stuck Web Developer</div>
            <div className={styles.aug2020}>
              Aug 2015 - Aug 2020 - 5 year, Tehran
            </div>
            <div className={styles.productTeamTo}>
              php, java, Jquery
            </div>
          </div>
        </div>
        <div className={styles.education}>
          <div className={styles.education1}>
            <div className={styles.experienceChild} />
            <div className={styles.experience2}>EDUCATION</div>
            <div className={styles.experienceItem} />
          </div>
          <div className={styles.beInIt}>
            <b
              className={styles.bachelorOfEngineering}
            >{`Bachelor of Engineering in computer hardware `}</b>
            <div className={styles.seniourUiDesigner}>
              Shahid Beheshti University
            </div>
            <div className={styles.newYork1}>2011-2015, Tehran</div>
          </div>
          <div className={styles.njit}>
            <b className={styles.bachelorOfEngineering}>{`NJIT Higher `}</b>
            <div className={styles.seniourUiDesigner}>shahid rajaie</div>
            <div className={styles.newYork1}>2009-2011, Tehran</div>
          </div>
        </div>
        <div className={styles.mySkill}>
          <div className={styles.mySkills}>
            <div className={styles.experienceChild} />
            <div className={styles.experience2}>MY SKILLS</div>
            <div className={styles.experienceItem} />
          </div>
          <div className={styles.figma}>
            <img className={styles.elipseIcon} alt="" src="/elipse15.svg" />
            <div className={styles.figma1}>react</div>
          </div>
          <div className={styles.ps}>
            <img className={styles.elipseIcon1} alt="" src="/elipse25.svg" />
            <div className={styles.adobePhotoshop}>
              <p className={styles.adobe}>nodejs</p>

            </div>
          </div>
          <div className={styles.ai}>
            <img className={styles.elipseIcon2} alt="" src="/elipse35.svg" />
            <div className={styles.adobePhotoshop}>
              <p className={styles.adobe}>php</p>

            </div>
          </div>
          <div className={styles.xd}>
            <img className={styles.elipseIcon2} alt="" src="/elipse45.svg" />
            <div className={styles.adobePhotoshop}>java</div>
          </div>

        </div>
        <div className={styles.htmlcssJquery}>
          <div className={styles.otherSkills}>
            <div className={styles.experienceChild} />
            <div className={styles.otherSkills1}>OTHER SKILLS</div>
            <div className={styles.experienceItem} />
          </div>
          <div className={styles.css3}>
            <img className={styles.elipseIcon} alt="" src="/elipse5.svg" />
            <div className={styles.css}>css 3</div>
          </div>
          <div className={styles.javascript}>
            <img className={styles.elipseIcon6} alt="" src="/elipse6.svg" />
            <div className={styles.adobePhotoshop}>Javascript</div>
          </div>
          <div className={styles.html5}>
            <img className={styles.elipseIcon} alt="" src="/elipse7.svg" />
            <div className={styles.html51}>HTML 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVResume;
