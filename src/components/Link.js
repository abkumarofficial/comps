import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        console.log(event);
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault(); // Not letting the browser to refresh
        navigate(to);
    }

    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;