export default function handler(_, res) {
  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-nginx-service-azure-na-prod-deploy:50039d933506-d23c1c5cab3e:run-counter-1" })
}