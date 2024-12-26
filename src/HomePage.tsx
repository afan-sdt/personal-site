import './HomePage.css'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import vsco from './assets/vsco.png'
import resume from './assets/resume 2.png'
import blog from './assets/blog.png'

export default function HomePage() {

    const handleButtonClick = (buttonName: string) => {
        if (buttonName === "Blog") {
            window.open('https://afansdt.wordpress.com/', '_blank');
        }
        else if (buttonName === "Resume") {
            window.open('/Affaan Saadat Resume old.pdf', '_blank');
        }
        else if (buttonName === "LinkedIn") {
            window.open('https://www.linkedin.com/in/affaan-saadat/', '_blank');
        }
        else if (buttonName === "VSCO") {
            window.open('https://vsco.co/affaanxsaadat/gallery', '_blank');
        }
        else if (buttonName === "GitHub") {
            window.open('https://github.com/afan-sdt', '_blank');
        }
      };
    
  return <div className="home-page">
    <div className='header'>
        <h1>Affaan Saadat</h1>
    </div>
    <div className='links'>
        <img onClick={() => handleButtonClick("Resume")} src={resume} alt="Resume" />
        <img onClick={() => handleButtonClick("LinkedIn")} src={linkedin} alt="LinkedIn" />
        <img onClick={() => handleButtonClick("GitHub")} src={github} alt="GitHub" />
        <img onClick={() => handleButtonClick("VSCO")} src={vsco} alt="VSCO" />
        <img onClick={() => handleButtonClick("Blog")} src={blog} alt="Blog" />
    </div>
    <div className="about">
        <h2>About Me</h2>
        <p> I'm a software engineer with nearly 3 years of experience in Full Stack Web Development.
             Most Recently, I worked at Docusign on their CLM AI extension. </p>
        <h2>Experience</h2>
        <ul>
            <li>Docusign - Software Engineer - CLM AI Extension (2022-2024)</li>
            <li>Docusign - Software Engineer Intern (2021)</li>
            <li>Capital One - Software Engineer Intern (2020)</li>
            <li>PLSC Collaborative - Software Engineer Intern (2019)</li>
        </ul>
        <h2>Education</h2>
        <ul>
            <li>University of Michigan (2017-2022) - B.S.E Computer Science, Cum Laude</li>
        </ul>
        <h2>Other Interests</h2>
        <ul>
            <li> Islamic Studies - Student of the Miftaah Institute in Warren, Michigan</li>
            <li> Reading </li>
            <ul>
                <li><a href="https://afansdt.wordpress.com/2024/12/21/books/">Books I've read and my recommendations for new grads</a></li>
            </ul>
            <li> Sports - Running, Soccer, Basketball, Volleyball, Snowboarding.</li>
            <ul>
                <li> Running - Ran 2 10ks this past year, looking to run a marathon</li>
            </ul>
            <li><a href="https://afansdt.wordpress.com/">Writing</a></li>
            <li> Non-Profit Work</li>
            <ul>
                <li>founded Yesterday's Clothing, a 501c3 non-profit organization dedicated to reselling used clothing for charity</li>
                <li>Volunteer Instructor at Code Nation and lead technology workshops at high schools in the Chicago area</li>
            </ul>
        </ul>
    </div>
  </div>;
}
