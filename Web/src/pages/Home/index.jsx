import "./style.css";
import Card from "../../components/structure/CardHome";
const View = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.caviarcriativo.com/wp-content/uploads/2020/06/Significados-da-Marca-Netflix-1000x480.gif"
          width="500px"
          class="img-fluid"
          alt="Logo Netflix"
        />
      </div>
      <h3>Filmes Premiado</h3>
      <div class="container_filmes_home ">
        <div className="marginC">
          <Card
            image="https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd1YnlmMdt1ewHlpL2u5Y6dy3s1nJtQHmDzOCByToKWPtHomjAx8z2PfxWUJKah6hC_h9av49VZTuuD00S4koeFoD5QjS0xt0qwF-AVeYXfeXX3gRo4yClYn3LlX.jpg?r=40f"
            texto="Alerta vermelho"
            alt="Imagem: Alerta vermelho"
          />
        </div>
        <div className="margin">
          <Card
            image="https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcHH0ntspXKpNoxJMSp2ZvUWZhXhVEwc0OXUqiATjb3tVknVy03Vi0xw1S7DQTHGnzx6WFlAaAP1HWriZImefkBLCMU.jpg?r=3b7"
            texto="Homem aranha: De volta ao lar"
            alt="imagem: Homem aranha: De volta ao lar"
          />
        </div>
        <div className="margin">
          <Card
            image="https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvzMQHpy5hzL9KFl40ezUPyLOBauW-qxkr88lec_QADPi0YjHcEX5uL5SUwOFu2lP0Naa8-WqeUGbIfARIw3l-cx9I.jpg?r=82c"
            texto="O protetor 2"
            alt="imagem: O protetor 2"
          />
        </div>
        <div className="margin">
          <Card
            image="https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUwoIxVMnmJGw-Ut8HKJnYv7xwKnhJaj3INXTR85n_zArGdWafm_Rm1N19k3sp6ONx5TAmhaepim18d6tc35citGnOs.jpg?r=16b"
            texto="Shrek"
            alt="imagem: Shrek"
          />
        </div>
      </div>
      <div className="Linha"> </div>
      <div className="Banner1">
        <div className="Fonte">
          <b>Aproveite na TV.</b>
          <p>
            Assista em Smart TVs, PlayStation, Xbox,<br></br> Chromecast,Apple
            TV, aparelhos de Blu-ray e <br></br>outros dispositivos.
          </p>
        </div>
        <div className="Image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            class="img-fluid"
            alt="tv desktop"
          />
        </div>
        <div className="Linha"> </div>
      </div>

      <div className="Banner2">
        <div className="Image">
          <img
            class="img-fluid"
            alt="Netflix kids"
            src="https://occ-0-3976-185.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUb4fcnETtielPJer_ORwZ2iUanycANl37cr81zDaXC9Fmg9c42ofxt0yxetNltG2xUMgf2Aqimz_q1Nsv-38Ng_EjIc.png?r=1b8"
          />
        </div>
        <div className="Fonte">
          <b>Crie perfis para crianças.</b>
          <p>
            Deixe as crianças se aventurarem com seus <br></br>personagens
            favoritos em um espaço feito só <br></br> para elas, sem pagar a
            mais por isso.
          </p>
        </div>
        <div className="Linha"> </div>
      </div>
    </div>
  );
};

export default View;
