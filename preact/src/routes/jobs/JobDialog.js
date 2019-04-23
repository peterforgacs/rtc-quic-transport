export const JobDialog = (props) => (<dialog id={props.id} class="mdl-dialog">
  <h4 class="mdl-dialog__title">{props.title}</h4>
  <div class="mdl-dialog__content">
    {props.children}
  </div>
  <div class="mdl-dialog__actions">
    <a href={props.applyAt} type="button" class="mdl-button">Apply</a>
    <button type="button" class="mdl-button close">Close</button>
  </div>
</dialog>);
