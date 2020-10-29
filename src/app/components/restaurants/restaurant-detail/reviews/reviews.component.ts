import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

// import {RestaurantsService} from '../../restaurants.service';
import {RestaurantsService} from '../../restaurants-json.service';
import {Observable} from 'rxjs/index';
import {Review} from './reviews.model';
import { ReviewsService } from './reviews.service';

@Component({
    selector: 'lacc-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    // reviews: Observable<Review>;
    reviews: Review[];
    imgReaction: string = '';

    constructor(private restaurantsService: RestaurantsService,
                private reviewService: ReviewsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        /**
         * In this context when obtaining the reviews you do not need to use subscribe because in the html component
         * when doing ngFor use the PIPE SYNC which already does the subscribe automatically
         * @type {Observable<Review>}
         */
       // this.reviews = this.restaurantsService.getReviewsOfRestaurants(this.route.parent.snapshot.params['id']);


        // this.restaurantsService.getReviewsOfRestaurants(this.route.parent.snapshot.parent.params['id'])
        //     .pipe(
        //         tap(reviews => console.log('review: ', reviews))
        //     )
        //     .subscribe(reviews => this.reviews = reviews);
        console.log(this.route.parent.snapshot.paramMap.get('id'));
        
        this.reviewService.getReviews(this.route.parent.snapshot.paramMap.get('id')).subscribe(
        
            response => {
                if(response.success)
                {
                    console.log(response);
                    
                    this.reviews = response.data;
                    
                }
            }
        )
    }

}
