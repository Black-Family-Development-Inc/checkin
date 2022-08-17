import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";

interface IExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: IExpandMoreProps) => {
  return <IconButton {...props} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Accordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Frequently Asked Questions" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          rerum ratione quos aperiam repellat, tempora recusandae optio nihil
          amet, sint delectus temporibus consectetur laborum magni atque
          adipisci porro velit ducimus odio modi beatae veritatis.
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatibus temporibus fugiat eligendi cumque officia nostrum. Qui
            laboriosam distinctio eligendi deleniti vero dicta repellendus
            perspiciatis sit quo dolorum recusandae nulla ex eius ab odit facere
            nobis eaque nesciunt, beatae totam fugit ipsum? Sed ea tenetur
            aperiam ratione consequuntur cum ex esse voluptatum? Eligendi
            doloribus quaerat fuga, sequi non deserunt officia nobis, modi
            beatae, sit asperiores. Exercitationem ipsam, debitis itaque id
            soluta repellendus eligendi quod molestiae rem, reprehenderit optio
            numquam in ducimus quibusdam architecto, quis voluptates praesentium
            similique. Rem dicta est deserunt quaerat, dolorum quisquam
            consectetur pariatur natus sequi amet explicabo.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
