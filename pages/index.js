export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>contentfly-nginx-service-azure-na-prod-deploy:50039d933506-d23c1c5cab3e:run-counter-1</p>}
    </div>
  )
}
export default Home
