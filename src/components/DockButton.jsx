
import PropTypes from 'prop-types';

const spaceMap = {
    "small": "2px",
    "medium": "4px",
    "large": "8px"
}

export default function DockButton({ children, ...props }) {
    const size = children && children.props && children.props.size ? children.props.size : "medium";
    const space = spaceMap[size] || spaceMap["medium"];
    return (
        <div className="dock-button-container" {...props}>
            <div className="dock-button" style={{ margin: `0 ${space}` }}>
                {children}
            </div>
        </div>
    )
}

DockButton.propTypes = {
    children: PropTypes.element.isRequired
};