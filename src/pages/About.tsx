import React from "react";
import {
  Card,
  Flex,
  Avatar,
  Text,
  CardHeader,
  CardBody,
  Button,
} from "@fluentui/react-northstar";
import {
  StarIcon,
  DownloadIcon,
  MoreIcon,
} from "@fluentui/react-icons-northstar";

const About = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>About Page</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          placeContent: "center",
          gap: "15px",
          width: "90%",
          margin: "5%",
        }}
      >
        {[...Array(4)].map((card) => (
          <Card aria-roledescription="card avatar">
            <CardHeader fitted>
              <Flex space="between">
                <Avatar
                  image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg"
                  label="Copy bandwidth"
                  name="Evie yundt"
                  status="unknown"
                />

                <Flex column>
                  <Text content="Allen Hart" weight="bold" />
                  <Text
                    content="Direct Factors Technician"
                    size="small"
                    weight="bold"
                  />
                  <CardBody>
                    This is some content that provides information about the
                    person, here is some demo...
                  </CardBody>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <Card style={{ width: "70%", margin: "4.5%", marginTop: "-3%" }}>
          <Card.Footer fitted>
            <CardBody>
              <Text content="About Us" weight="bold" size="large" />
              <p>
                {" "}
                We are a team of developers who have been working on this
                project for over 2 years now...Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Expedita mollitia deleniti quidem
                minima. Error autem impedit totam, deserunt cupiditate quas
                omnis consequatur consequuntur, accusamus voluptatibus corporis
                incidunt. Unde inventore suscipit possimus iste temporibus
                quisquam eum magni excepturi consectetur, cum aut!
                Exercitationem beatae adipisci magni reiciendis blanditiis
                voluptatum libero reprehenderit ab?
              </p>
            </CardBody>
            Loren Finn..
          </Card.Footer>
        </Card>
      </div>
      <br />
      <h4 style={{ marginTop: "-55px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore
        velit rem maxime laboriosam deserunt iste magnam suscipit voluptatum
        sapiente.
      </h4>
    </>
  );
};

export default About;
