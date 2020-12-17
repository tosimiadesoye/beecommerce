
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Shop = () => {
  return (
    <Container lassName={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
