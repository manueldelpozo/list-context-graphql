import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 10,
        padding: theme.spacing(2),
        background: 'linear-gradient(to top, rgba(100, 100, 100, 1), rgba(100, 100, 100, 0))',
        textAlign: 'center',
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
        transform: 'rotate(180deg)',
    },
}))

export default function LoadMoreButton({ onLoadMore }) {
    const classes = useStyles()

    // const mapState = useCallback(
    //     state => ({
    //         heroes: state.heroes,
    //         newLoadedHeroes: state.newLoadedHeroes,
    //         displayedHeroes: state.displayedHeroes
    //     })
    // );
    //
    // const { heroes, newLoadedHeroes, displayedHeroes } = useMappedState(mapState);

    return (
        <div className={classes.root}>
            <Fab
                onClick={onLoadMore}
                variant="extended"
                aria-label="delete"
                color="primary"
                className={classes.fab}
                //disabled={heroes.length + newLoadedHeroes.length !== displayedHeroes}
            >
                <NavigationIcon className={classes.extendedIcon} />
                Load more
            </Fab>
        </div>
    );
}