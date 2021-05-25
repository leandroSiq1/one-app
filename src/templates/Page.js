import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  
}));

export default function Page({ title, Component }) {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h3" color="secondary">
      {title}
    </Typography>
      <Component />
    </>
  );
}