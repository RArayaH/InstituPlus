import { AnimationController, Animation } from '@Ionic/Angular';
export const enterAnination = (baseEl:HTMLElement, opts?:any): Animation => {

    const DURATION = 1000;

    console.log('baseEl', baseEl);
    console.log('opts', opts);

    const animationCtrl = new AnimationController();

    if (opts.direction === 'forward'){
        return animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);
    }else{
        const rootAnimation = animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1)

        const leavingAnimation = animationCtrl.create()
        .addElement(opts.leavingEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 1, 0)

        return animationCtrl.create().addAnimation([rootAnimation, leavingAnimation])
    }

}