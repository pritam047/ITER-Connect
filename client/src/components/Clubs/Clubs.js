import React from 'react'

import './Clubs.css'
const Clubs = () => {

    let clubData = [{
        name: "CODEX",
        motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
    },
{
    name: "SOA English Cafe",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "Innovation and Enterpreneurship Cell",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "SOA Literary Club",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "Coding Development Hub",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "Jaago",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "Envogue",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "Srishti(Arts) Club",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
{
    name: "SOA Music Club(SMC)",
    motto: "We code. We Explore.",
        founders: ["Siddhant", "Swastik Preetam"],
        email: "codexiter@gmail.com",
        totalMembers: 169,
        description: "One and only coding club of ITER",
        socials: ["insta", "fb", "twitter", "linkedin", "github"]
},
];
// let names = clubData.map((club) => club);
// console.log(names);
return(
    <>
    <div className='clubs-container'>
    {clubData.map((club) => (
        <div className='club-box'>
         <div className='club-info'>
                    <div className='club-name'>{club.name}</div>
                    <div className="club-socio-handles">
                        <a href="https://www.instagram.com/codexiter/" className="nav-item">
                            <div className="nav-links">
                                <i className="fab fa-instagram"></i>
                            </div>
                            {/* <span className="nav-link-text">Instagram</span> */}
                        </a>
                        <a href="https://www.facebook.com/codexiter/" className="nav-item">
                            <div className="nav-links">
                                <i className="fab fa-facebook"></i>
                            </div>
                        </a>
                        <a href="https://twitter.com/" className="nav-item">
                            <div className="nav-links transition-all">
                                <i className="fab fa-twitter"></i>
                            </div>
                            {/* <span className="nav-link-text">Twitter</span> */}
                        </a>
                        <a href="https://youtube.com/" className="nav-item">
                            <div className="nav-links transition-all">
                                <i className="fab fa-youtube"></i>
                            </div>
                            {/* <span className="nav-link-text">Youtube</span> */}
                        </a>
                        <a href="https://www.linkedin.com/" className="nav-item">
                            <div className="nav-links transition-all">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            {/* <span className="nav-link-text">LinkedIn</span> */}
                        </a>
                    </div>
                    <div className='other-info' style={{borderBottom: "0.1px solid #bef"}}>
                        <p>Founder(s): Siddhant, Swastik Preetam</p>
                        <p>Total Members : 169</p>
                        <p>Contact : +91-8784936437</p>
                        <p>Email: codexiter@gmail.com</p>
                    </div>
                    <div className='club-description'>
                        <p>The one and only genuine,uncomparable coding club of ITER.
                        The one and only genuine,uncomparable coding club of ITER.
                        </p>
                    </div>
                </div>
                <div className='club-img'>
                    <img src="https://picsum.photos/seed/picsum/300/300" alt="club logo" />
                </div>
        </div>
        )
    )};
    </div>
    </>
)
}

export default Clubs;