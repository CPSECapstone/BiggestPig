import {makeStyles} from "@material-ui/core/styles";

export const primaryColor = "#0066ff";
export const secondaryFontColor = "#fdfdf8"

export const useStyles = makeStyles({
    body: {
        padding: '0px',
        margin: 0
    },
    root: {
        width: 500,
    },
    navBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: {primaryColor}.primaryColor,
        color: {secondaryFontColor}.secondaryFontColor,
        overflow: "hidden",
        margin: 0,
        padding: 0
    },
    secondaryText: {
        color: {secondaryFontColor}.secondaryFontColor
    }
});
