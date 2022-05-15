import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#ff4040",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation shared by the Team on ONE NOTE",
  url: "https://applaudostudios.sharepoint.com/:o:/r/sites/TAWSTraineeProgram-Trainers/Shared%20Documents/Trainers/AWS%20Content?d=w50a0d25d0f224143be20db3546dd9389&csf=1&web=1&e=aKaZ3v",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Week 1 - DevOps Culture ",
    url: "#",
    description:
      "This week is all about introducing you to the DevOps mindset. DevOps is not a role or a set of tools, it's a way of working and culture of collaboration. ",
    color: "#E95800",
  },
  {
    text: "Week 2 - Linux & Bash scripting",
    url: "#",
    description:
      "GNU/Linux powers most of our modern world, it can be found from the smallest IoT devices to the most powerful supercomputers and cloud vendors. A good understanding of how to use Linux and its tools is very important for a DevOps engineer, since most of the infrastructure that we manage runs some flavor of Linux. ",
    color: "#1099A8",
  },
  {
    text: "Week 3 - Git & CI/CD",
    url: "#",
    description:
      "Git is the most popular software for source control versioning. It enables teams to collaborate and work simultaneously on the same code, and it's multiple concepts such as branches, merging and tags, enable advanced workflows that give place to Continuous Integration and Continuous Delivery. ",
    color: "#BC027F",
  },
  {
    text: "Week 4 - Content Blocked",
    url: "#",
    badge: true,
    description:
      "Content Blocked.",
    color: "#0D96F2",
  },
  {
    text: "Week 5 - Content Blocked",
    url: "#",
    badge: true,
    description:
      "Content Blocked.",
    color: "#8EB814",
  },
  {
    text: "Week 6 - Content Blocked",
    url: "#",
    badge: true,
    description:
      "Content Blocked.",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Challenge | Week 3</title>
      <h1 style={headingStyles}>
        AWS Trainee
        <br />
        <span style={headingAccentStyles}>Notes related to the Trainee </span>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Kevin Orlando Hernandez Rivera | Week 3</code> 
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
