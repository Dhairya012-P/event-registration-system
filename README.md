HeliHive™: Event Registration & Digital Credentialing SystemHeliHive™ is a full-stack MERN application designed to replace traditional paper-based entry at Karnavati University with a secure, real-time digital pass ecosystem.

The project features a dual-phase architecture: a fully functional Locally Hosted Model and a comprehensive Google Cloud Migration Strategy.🚀 Project OverviewThe Mission: To provide a secure, real-time digital credentialing ecosystem for campus events.
<img width="1900" height="952" alt="image" src="https://github.com/user-attachments/assets/2734759f-6d9d-4f42-b8f3-2714a35ab97d" />
<img width="1769" height="1032" alt="image" src="https://github.com/user-attachments/assets/765788ef-c4ba-4d75-89e1-07a78c758364" />


The Scope: A full-stack application providing instant, personalized ID passes with dynamic QR code verification.The Innovation: Automated "image-stamping" logic that overlays student data onto event-specific backgrounds.🛠️

Phase 1: Local Architecture (Current Build)The current system is built for high performance within a local university network.Tech StackFrontend: HTML5, CSS3, and JavaScript using the Fetch API.Backend: Node.js and Express.js running on localhost.Database: MongoDB (NoSQL) for flexible JSON-based student profiles.Core FeaturesThe Engine: Automatically generates unique ticketIds and "stamps" student data onto backgrounds.Asset Management: Uses dynamic CSS mapping to overlay QR codes and names onto Tech, Cultural, or ESport templates.Admin Portal: A centralized dashboard for staff to monitor registrations and verify student records.☁️ 

Phase 2: Google Cloud Migration StrategyTo overcome the "Single Point of Failure" of local hosting, we have designed a roadmap to move to Managed Services on Google Cloud Platform (GCP).Service MappingLocal ComponentGoogle Cloud ServiceCategoryNode.js ServerGoogle Cloud RunPaaS MongoDB (Local)MongoDB Atlas on GCPDBaaS Local ImagesGoogle Cloud Storage (GCS)IaaS Admin LoginFirebase Auth / OAuth 2.0SaaS Migration HighlightsScalability: Cloud Run provides serverless execution that scales to handle 10,000+ student "spikes".Reliability: Transitioning from a single local server to a 99.95% SLA-backed cloud infrastructure.Automation: Implementation of CI/CD pipelines via Google Cloud Build for seamless updates.

📦 Implementation & SecurityContainerization: Use of Docker to ensure the app runs identically on any environment.Data Layer: Migration scripts with validation to move MongoDB documents into cloud-synced environments.Observability: Cloud Logging and performance dashboards for proactive incident detection.📂 Repository Structure/public: Frontend assets (HTML, CSS, Client-side JS)./image: Event background templates (Tech, Cultural, ESport).server.js: The Express.js backend engine.migration-scripts/: Tools for data porting and cloud setup.🎓 


Author[Dhairya Poojara , VIshesh Mehta , Kartik Yadav ] HeliHive (Capstone Project) | Karnavati University 
