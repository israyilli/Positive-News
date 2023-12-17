import "../assets/style/Home.css";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <section
        className="first"
        style={{ display: "flex", paddingTop: "60px" }}
      >
        <div className="image">
          <img
            src="https://www.positive.news/wp-content/uploads/2023/12/iStock-1286515291-1320x880-c-center.jpg"
            alt="hello"
            style={{ width: "630px", height: "416px" }}
          />
        </div>
        <div className="text">
          <h1 style={{ fontFamily: "colchis-bold" }}>
            What when right this week: the good news you should know about
          </h1>
          <p style={{ paddingTop: "20px", paddingBottom: "10px" }}>
            A 'landmark' climate deal was struck, a species came back from
            extinction, and New York teens got free therapy, plus more good news
          </p>
          <a href="">Environment / Health / Lifestyle / Society / UK / World</a>
        </div>
      </section>
      <hr style={{ marginTop: "70px" }} />
      <section className="second">
        <h3>Latest articles</h3>
        <div
          className="bigBox"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            paddingBottom: "70px",
          }}
        >
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <img
              src="https://www.positive.news/wp-content/uploads/2023/12/1200-%C3%97-800px-2023-12-14T185107.327-1800x0-c-center.jpg"
              alt="dog image"
              style={{ width: "390px", height: "232px" }}
            />
            <h2 style={{ paddingBottom: "10px" }}>
              How 'husky therapy' is helping offenders to tackle their mental
              health challenges
            </h2>
            <p style={{ paddingBottom: "10px" }}>
              An adventure leisure company has partnered with the NHS to offer
              canine-led therapy to offenders on a mental health unit
            </p>
            <a href="">
              Body & Mind / Health / Lifestyle / Society / Wellbeing
            </a>
          </div>
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <img
              src="https://www.positive.news/wp-content/uploads/2023/12/iStock-1337173750-740x492-c-center.jpg"
              alt="stansiya image"
              style={{ width: "390px", height: "232px" }}
            />
            <h2 style={{ paddingBottom: "10px" }}>
              Even as the heat has been on in Dubai, the renewables juggernaut
              has gathered pace
            </h2>
            <p style={{ paddingBottom: "10px" }}>
              The Cop28 agreement is imperfect yet significant - and one of a
              host of causes for optimism
            </p>
            <a href="">Environment / Politics / Society / World</a>
          </div>
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <div className="img" style={{ background: " #f9ecc0" }}>
              <img
                src="https://www.positive.news/wp-content/uploads/2023/12/iStock-1475805651-scaled-740x492-c-center.jpg"
                alt="girl image"
                style={{ width: "390px", height: "232px" }}
              />
            </div>
            <div
              className="post"
              style={{ background: " #f9ecc0", height: "268px" }}
            >
              <p>Positive.News | Partners</p>
              <h2 style={{ paddingBottom: "10px" }}>
                "We've had untold support": how farmers are getting creative
                with tree-planting
              </h2>
              <p>
                Tree-planting can be boosted by teaming up eith farmers, but
                what's thr smartest way to do this?
              </p>
              <p>Written in partnership with The National Forest </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <img
              src="https://www.positive.news/wp-content/uploads/2023/12/PN-Open-Dialogue_Joanne-Crawford-48-740x492-c-center.jpg"
              alt="man image"
              style={{ width: "390px", height: "232px" }}
            />
            <h2 style={{ paddingBottom: "10px" }}>
              The Nordic way: why the alternative Finnish approach to psychosis
              is going global
            </h2>
            <p>
              Developed by Finnish doctors in the 1980s, "open dialogue"
              dramatically improves outcomes for those in crisis
            </p>
            <p>Health / Lifestyle / Society / Wellbeing / World</p>
          </div>
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <img
              src="https://www.positive.news/wp-content/uploads/2023/12/Screenshot-2023-12-08-at-12.20.26-740x492-c-center.jpg"
              alt="children image"
              style={{ width: "390px", height: "232px" }}
            />
            <h2 style={{ paddingBottom: "10px" }}>
              Circles of hope: the Guatemalan women reviving Indigenous concepts
              of mental wellbeing
            </h2>
            <p>
              Following decades of civil war, a community collective in
              Guatemala uses sharing circles to revive Indigenous concepts of
              mental health
            </p>
            <p>Health / Lifestyle / Society / Wellbeing / World</p>
          </div>
          <div
            className="card"
            style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
          >
            <img
              src="https://www.positive.news/wp-content/uploads/2023/12/iStock-890135444-740x492-c-center.jpg"
              alt="child image"
              style={{ width: "390px", height: "232px" }}
            />
            <h2 style={{ paddingBottom: "10px" }}>
              What went right this week: the Amazon turned a corner, plus more
            </h2>
            <p>
              The Amazon turned a corner, there was progress at Cop28, and south
              Africa's four-day week pilot brought "huge benefits", plus more
            </p>
            <p>Environment / Science / Society / UK / World</p>
          </div>
        </div>
      </section>
      <section
        className="red"
        style={{
          backgroundColor: "#ff594d",
          color: "#fff",
          height: "250px",
          //   display: "flex",
          width:"1400",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ paddingTop: "80px" }}>Make it a glass half-full</h1>
        <button
          style={{
            backgroundColor: "#ff594d",
            color: "#fff",
            border: "1px solid white",
          }}
        >
          Give Positive News magazine this Christmas
        </button>
      </section>
      <hr style={{ marginTop: "70px" }} />
      <section className="third">
        <h3>More uplifting articles</h3>
        <div
          className="bigBox"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            paddingBottom: "70px",
          }}
        >
          <div className="card">
            <img
              src="https://www.positive.news/wp-content/uploads/2020/12/markus-spiske-ZfwnLB94BKY-unsplash-e1637833853692-740x492-c-center.jpg"
              alt="image"
              style={{ width: "390px", height: "232px" }}
            />
            <h5>
              Sustainable Christmas ideas: 13 ways to make the festive season
              greener
            </h5>
            <p>
              Tis' the season to be jolly careful about your environmental
              impact. Her's how to go green this Christmas, while also saving
              money
            </p>
            <p>Environment / Lifestyle</p>
          </div>
          <div className="card">
            <img
              src="https://www.positive.news/wp-content/uploads/2023/11/Carsten_Samuel_-Portrait-740x492-c-center.jpg"
              alt="image"
              style={{ width: "390px", height: "232px" }}
            />
            <h5>
              Three good things: longlife tech to inspire us beyond our
              throwaway culture
            </h5>
            <p>
              We take a closer look at a laptop, phone and a vacuum cleaner that
              have been designed with a longer life in mind
            </p>
            <p>Innovation / Society / Technology</p>
          </div>
          <div className="card">
            <img
              src="https://www.positive.news/wp-content/uploads/2023/11/iStock-1435381372-740x492-c-center.jpg"
              alt="image"
              style={{ width: "390px", height: "232px" }}
            />
            <h5>
              Yiu told us?: how Positive News readers challange rampant
              consurmerism
            </h5>
            <p>
              "Tis the season to buy, buy, buy, but Positive News readers are
              choosing to do things differently this Christmas"
            </p>
            <p>Lifestyle / Society / Wellbeing</p>
          </div>
        </div>
      </section>
      <hr style={{ margin: "70px" }} />
      <section
        className="fourth"
        style={{
          display: "flex",
          gap: "25px",
          width: "1084px",
          height: "619px",
        }}
      >
        <div
          className="left"
          style={{
            backgroundColor: "#f8f8f8",
            padding: "30px",
            width: "400px",
            height: "619px",
          }}
        >
          <div className="card1">
            <h2 style={{ paddingBottom: "10px" }}>The magazine</h2>
            <div style={{ display: "flex" }}>
              <img
                src="https://www.positive.news/wp-content/uploads/2023/10/PN115_cover-scaled-400x0-c-center.jpg"
                alt=""
                style={{ width: "140px", height: "180px" }}
              />
              <div
                className="textt"
                style={{ gap: "20px", marginLeft: "20px" }}
              >
                <h3>Latest issue</h3>
                <h5>Oct-Dec 2023</h5>
                <p>Rewilding goes guerilla</p>
              </div>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="card2">
            <div style={{ display: "flex" }}>
              <img
                src="https://www.positive.news/wp-content/uploads/2023/07/PN114_cover-scaled-400x0-c-center.jpg"
                alt=""
                style={{ width: "140px", height: "180px" }}
              />
              <div className="textt">
                <h3>Back issues</h3>
                <p>Catch up on what's been going right in the world</p>
              </div>
            </div>
            <button>View back issues</button>
          </div>
        </div>
        <div
          className="right"
          style={{
            backgroundColor: "#daf6fa",
            width: "1000px",
            height: "534px",
          }}
        >
          <h2>Editor's pick</h2>
          <div
            className="boxs"
            style={{
              display: "flex",
              width: "600px",
              gap: "60px",
              //   marginLeft: "20px",
              padding: "20px",
            }}
          >
            <div className="part1" style={{ width: "300px" }}>
              <img
                src="https://www.positive.news/wp-content/uploads/2023/11/ben-wicks-iDCtsz-INHI-unsplash-740x492-c-center.jpg"
                alt=""
                style={{ width: "316px", height: "210px" }}
              />
              <h3>
                As Ireland's smartphone school ban is approved, the town where
                it all began
              </h3>
              <h5>
                Fearing the impact of phone use on their children, one town came
                up with a solution. Now the Irish government is following suit
              </h5>
              <p>Education / Society / Wellbeing</p>
            </div>
            <div className="part2" style={{ width: "300px" }}>
              <img
                src="https://www.positive.news/wp-content/uploads/2023/10/2B1YE2P-740x492-c-center.jpg"
                alt=""
                style={{ width: "316px", height: "210px" }}
              />
              <h3>Making a comeback: the "lost" species returing to Britain</h3>
              <h5>
                Some were reintroduced, others mysteriously reappeared. Meet the
                species that came back from the abyss
              </h5>
              <p>Conservation / Environment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
