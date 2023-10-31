import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <>
      <Button>Home</Button>

      {/* About Us */}
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow1' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          About Us
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow1" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>About anziam</MenuItem>
                    <MenuItem onClick={handleClose}>Vision and mission</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {/* Products */}


        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow2' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         Products
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow2" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>calcium alginate dressings</MenuItem>
                    <MenuItem onClick={handleClose}>silver alginate dressings</MenuItem>
                    <MenuItem onClick={handleClose}>cmc</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {/* Latest */}
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow3' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         Latest
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow3" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Blogs</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {/* Team */}
        <Button variant="text" color="default">
          Team
        </Button>

        {/* Innovation */}
        <Button variant="text" color="default">
          Innovation
        </Button>


    </>
  );
}
