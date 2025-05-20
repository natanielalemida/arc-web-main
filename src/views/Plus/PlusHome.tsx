import Layout from "../../components/Layout";
import BaseLayoutPlus from "../Home/components/BaseLayoutPlus";
import IntegrationPOS from "../Home/components/IntegrationPOS";
import KronosApp from "../Home/components/KronoApp";
import KronosFood from "../Home/components/KronosFood";
import KronosVendas from "../Home/components/KronosVendas";
import SecondaryHeader from "../Home/components/SecodaryHeader";

export default function PlusHome() {
 return(
  <BaseLayoutPlus>
  <Layout>
  <div id="home">
      <SecondaryHeader />
  </div>
  <div id="kronosapp">
      <KronosApp />
  </div>
  <div id="kronosfood">
    <KronosFood />
  </div>
  <div id="kronosvendas">
    <KronosVendas />
  </div>
  <div id="integracao">
    <IntegrationPOS />
  </div>
</Layout>
  </BaseLayoutPlus>
  )
}