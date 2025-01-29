import "./ActionsPanel.css";

const ActionsPanel = ({ onCancel, onUpdate }) => (
  <div className="actions-panel">
    <button onClick={onCancel}>Cancel</button>
    <button onClick={onUpdate}>Update</button>
  </div>
);

export default ActionsPanel;