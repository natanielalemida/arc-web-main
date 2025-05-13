import Layout from "../../components/Layout";
import BaseLayout from "../Home/components/BaseLayout";
import IntegrationPOS from "../Home/components/IntegrationPOS";
import KronosApp from "../Home/components/KronoApp";
import KronosFood from "../Home/components/KronosFood";
import KronosVendas from "../Home/components/KronosVendas";
import SecondaryHeader from "../Home/components/SecodaryHeader";

export default function PlusHome() {
 return(
  <BaseLayout>
  <Layout>
  <div id="secondary-header">
      <SecondaryHeader />
  </div>
  <div>
      <KronosApp />
  </div>
  <div>
    <KronosFood />
  </div>
  <div>
    <KronosVendas />
  </div>
  <div>
    <IntegrationPOS />
  </div>
</Layout>
  </BaseLayout>
  )
}