package com.infy.ekart.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EK_PRODUCT_REVIEW")
public class Review {

	@Id
	@Column(name="USER_ID")
	private Integer userId;
	
	@Column(name="USER_NAME")
	private String userName;
	
	@Column(name="RATING")
	private Integer rating;
	
	@Column(name="REVIEW_COMMENTS")
	private String reviewComments;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getReviewComments() {
		return reviewComments;
	}

	public void setReviewComments(String reviewComments) {
		this.reviewComments = reviewComments;
	}

	@Override
	public String toString() {
		return "Review [userId=" + userId + ", userName=" + userName + ", rating=" + rating + ", reviewComments="
				+ reviewComments + "]";
	}

	
}
