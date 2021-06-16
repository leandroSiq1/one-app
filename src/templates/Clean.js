import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  container: {
    paddingTop: 15,
  }
}));

export default function Clean({ title, Component }) {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Component />
      </Container>
    </>
  );
}