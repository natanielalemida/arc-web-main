import Divider from "./components/Divider";
import Header from "./components/Header";
import InfoManagementSection from "./components/InfoManagementCard";
import AboutSolution from "./components/Container";
import Layout from "../../components/Layout";
import BaseLayout from "./components/BaseLayout";
export default function HomeView() {



 return(
  <BaseLayout>
   <Layout>
    <div>
     <Header />  
    </div>
    <div>
      <AboutSolution />   
    </div>
    <div>
      <InfoManagementSection />
    </div>
    <div>
      <Divider />
    </div>
   </Layout>
   </BaseLayout>
 )
}