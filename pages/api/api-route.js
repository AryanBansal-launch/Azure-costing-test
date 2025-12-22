export default function handler(_, res) {
  if (process.env.NEXT_PUBLIC_TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("Env variable not present");
  }

  res.setHeader('Set-Cookie', 'myCookie=myValue; Path=/; HttpOnly');
  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-nginx-service-azure-na-prod-deploy:50039d933506-d23c1c5cab3e:run-counter-1" })
}