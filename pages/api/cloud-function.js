export default function handler(_, res) {
  if (process.env.NEXT_PUBLIC_TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("Env variable not present");
  }

  res
    .status(200)
    .json({ deploymentIdentifier: "This is test identifier message" })
}
