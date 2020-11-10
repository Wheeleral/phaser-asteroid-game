export default class Sprite {

  constructor(scene, x, y, image) {
    this.scene = scene;
    this.sprite = scene.physics.add.image(x, y, image);
    this.destroyed = false;
    this.spawnTime = 0.0;
  }

  wrap() {
    this.scene.physics.world.wrap(this.sprite, 32);
  }

  destroy() {
    this.destroyed = true;
    this.sprite.destroy(true);
  }

  isDestroyed() {
    return this.destroyed;
  }

  setVisible(visible) {
    if (!this.isDestroyed()) {
      this.sprite.setVisible(visible);
    }
  }

  isVisible() {
    return this.sprite.visible;
  }

  setSpawnTime(time){
    this.spawnTime = time;
  }

  doIDie(time){
      if ((time - this.spawnTime) > 50){
          this.destroy();
      }
  }

  /**
   * When useDamping is false (the default), this is absolute loss of velocity due to movement, 
   * in pixels per second squared. When useDamping is true, this is 1 minus the damping factor. 
   * A value of 1 means the Body loses no velocity. A value of 0.95 means the Body loses 5% of 
   * its velocity per step. A value of 0.5 means the Body loses 50% of its velocity per step.
   * 
   * @param {Boolean} useDamping 
   * @param {Number} drag 
   */
  setDrag(useDamping, drag) {

    if (!this.isDestroyed()) {
      this.sprite.setDamping(useDamping);
      this.sprite.setDrag(drag);
    }
  }

  setAcceleration(x, y) {
    if (!this.isDestroyed()) {
      this.sprite.setAcceleration(x, y);
    }
  }

  /**
   * Makes the ship accelerate in the direction of the ship's current rotation.
   * 
   * @param {Number} acceleration 
   */
  setForwardAcceleration(acc) {
    if (!this.isDestroyed()) {
        this.setAcceleration(Math.cos(this.getRotation()) * acc, Math.sin(this.getRotation()) * acc);
    }
  }

  setVelocity(x, y) {
    if (!this.isDestroyed()) {
      this.sprite.setVelocity(x, y);
    }
  }

  /**
   * Makes the ship move at a certain velocity in the direction of the ship's
   * current rotation.
   * 
   * @param {Number} velocity 
   */
  setForwardVelocity(vel) {
    if (!this.isDestroyed()) {
      this.setVelocity(Math.cos(this.getRotation()) * vel, Math.sin(this.getRotation()) * vel);
    }
  }

  setAngularVelocity(velocity) {
    if (!this.isDestroyed()) {
      this.sprite.setAngularVelocity(velocity);
    }
  }

  getRotation() {
    return this.sprite.rotation;
  }

  getSpeed() {
    return this.sprite.body.speed;
  }

  setMaxVelocity(velocity) {
    if (!this.isDestroyed()) {
      this.sprite.setMaxVelocity(velocity);
    }
  }
}
