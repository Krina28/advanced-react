import React, { Component } from "react";
import Banner from './banner';
import image from '../../images/bg.png';

class About extends Component {
    render() {
        return (
            // Used React Fragment when no required of any html tag
            // For more info : https://reactjs.org/docs/fragments.html
            <React.Fragment>
                <h2>About US</h2>
                <Banner image={image} imageClass={'banner-logo'} />
                {/* testing cherry-pick, this commit should be merged in master branch. */}
                <section>
                    <p>
                        Welcome to [store name], your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]
                        Founded in [year] by [founder's name], [store name] has come a long way from its beginnings in a [starting location, ie: home office, toolshed, Houston, TX.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.

                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                        Sincerely,
                        Name, [title, ie: CEO, Founder, etc.]
                    </p>
                </section>
            </React.Fragment>
        );
    }
}

export default About;
