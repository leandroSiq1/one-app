import { makeStyles } from '@material-ui/core/styles';

// retornando obj === retorno implicito // JSS
const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    marginLeft: 10,
  }
}));

export default useStyles;