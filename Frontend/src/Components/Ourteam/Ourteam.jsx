import React from "react";
import "./Ourteam.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Emma Wilson",
    role: "Solar Engineer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Alex Johnson",
    role: "Sales Representative",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "James Carter",
    role: "Energy Analyst",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sophia Green",
    role: "Energy Consultant",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const Ourteam = () => {
  return (
    <section className="ourteam">
      <div className="ourteam_container">

        {/* HEADING */}
        <div className="ourteam_heading">
          <span>OUR TEAM</span>
          <h2>What our customers say</h2>
          <p>
            Real experiences from homeowners who made the switch to
            solar energy.
          </p>
        </div>

        {/* GRID */}
        <div className="ourteam_grid">
          {teamMembers.map((member, index) => (
            <div className="team_item" key={index}>
              <img src={member.img} alt={member.name} />

              <div className="team_info">
                <h4>{member.name}</h4>
                <div className="team_role">{member.role}</div>

                <div className="team_socials">
                  <a href={member.socials.instagram} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href={member.socials.facebook} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.twitter} aria-label="X">
                    <FaXTwitter />
                  </a>
                  <a href={member.socials.linkedin} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ourteam;
