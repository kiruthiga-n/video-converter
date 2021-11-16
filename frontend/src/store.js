import { observable, action, decorate } from "mobx";
class ConversionsStore {
  conversions = [];
  setConversions(conversions) {
    this.conversions = conversions;
  }
}
ConversionsStore = decorate(ConversionsStore, {
  conversions: observable,
  setConversions: action
});
export { ConversionsStore };