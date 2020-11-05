import {makeStyles} from "@material-ui/core/styles";

export const primaryColor = "#0066ff";
export const secondaryFontColor = "#fdfdf8"

export const useStyles = makeStyles({
    root: {
        width: 500,
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
