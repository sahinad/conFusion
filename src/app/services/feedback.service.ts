import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
    return this.restangular.all('feedback').post(feedback);
  }

}
