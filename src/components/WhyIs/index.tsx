import React from "react";

import { Container, Grids } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import Grid from "./Grid";
import airTransmission from "../../assets/images/opportunities_for_all.jpg";
import humanContacts from "../../assets/images/visibility.jpg";
import containtedObjects from "../../assets/images/community.jpg";

const WhyIs: React.FC = () => {
  return (
    <Container>
      <div>
      <h2>Why is Withinhere Important?</h2>
        <HeaderCenterSection title="Inclusion">
        Global starts locally and that should at most align with 
        commerce for mutual benefit. The advent of the internet shrinked 
        the world into one global village by connecting diffrent places. However, 
        this also alienated local businesses to the detriment of local 
        community development.This was a flaw in development and Withinhere
        is here to correct this for mutual benefit.
        </HeaderCenterSection>
        <Grids>
          <Grid title="Opportunities to All" image={airTransmission}>
          You can be just starting out in business, trying to expand or 
          just someone who wants to make that extra money using your 
          skills or expertise during free time. You can even be just someone 
          trying to find a certain product or service near you. Withinhere 
          gives you visibility as a business whenever you need it or access
          to sellers and comfort of privacy whenever you want it. 
          </Grid>
          <Grid title="Privacy" image={humanContacts}>
          Withinhere is designed such that you are only accessible to prospective 
          sellers or buyuers at your choice. This is done through one activating 
          visibility in areas or comunities of ineterest at a particular time. This 
          is most convinient for those who only offer a certain product when available
          or a service when they have the time.
          </Grid>
          <Grid title="Local Business Support" image={containtedObjects}>
          It is a collective responsibility to create opportunities in our local 
          communities because this is how we create opportunities for even those 
          close to us indirectly.This is why a community should only buy or sell things outside 
          that community if it was really neccesary due to low supply or uncompetitive 
          prices. If this is not the case, we all need to support local activities 
          as that will always have a trickledown effect on us or our loved ones and Withinhere 
          gives you an opportunity to add such value to your community.
          </Grid>
        </Grids>
      </div>
    </Container>
  );
};

export default WhyIs;
