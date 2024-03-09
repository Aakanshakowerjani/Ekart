package com.infy.ekart.product.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="EK_PRODUCT")
public class Product {
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="IMAGE_URL")
	private String imageUrl;
	
	@Column(name="DISPLAY_NAME")
	private String displayName;
	
	@Column(name="SHORT_DESCRIPTION")
	private String shortDesc;
	
	@Column(name="DESCRIPTION")
	private String desc;
	
	@Column(name="CATEGORY")
	private String category;
	
//	@Column(name="BRAND")
//	private String brand;
	
	@Column(name="PRICE")
	private Double price;

	@Column(name="DISCOUNT")
	private Integer discount;
	
	@Column(name="DELIVERY_CHARGE")
	private Double deliveryCharge;
	
	@Column(name="OFFER_PRICE")
	private Double offerPrice;
	
	@Column(name="SELLER")
	private String seller;
	
	@Column(name="SELLER_COUNT")
	private Integer sellerCount;
	
	@Column(name="AVG_RATING")
	private Integer avgRating;
	
//	@Column(name="QUANTITY")
//	private Integer availableQuantity;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name ="REVIEW_ID")
	private List<Review> review;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public String getShortDesc() {
		return shortDesc;
	}

	public void setShortDesc(String shortDesc) {
		this.shortDesc = shortDesc;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getDiscount() {
		return discount;
	}

	public void setDiscount(Integer discount) {
		this.discount = discount;
	}

	public Double getDeliveryCharge() {
		return deliveryCharge;
	}

	public void setDeliveryCharge(Double deliveryCharge) {
		this.deliveryCharge = deliveryCharge;
	}

	public Double getOfferPrice() {
		return offerPrice;
	}

	public void setOfferPrice(Double offerPrice) {
		this.offerPrice = offerPrice;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public Integer getSellerCount() {
		return sellerCount;
	}

	public void setSellerCount(Integer sellerCount) {
		this.sellerCount = sellerCount;
	}

	public Integer getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Integer avgRating) {
		this.avgRating = avgRating;
	}

	public List<Review> getReview() {
		return review;
	}

	public void setReview(List<Review> review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", imageUrl=" + imageUrl + ", displayName=" + displayName + ", shortDesc="
				+ shortDesc + ", desc=" + desc + ", category=" + category + ", price=" + price + ", discount="
				+ discount + ", deliveryCharge=" + deliveryCharge + ", offerPrice=" + offerPrice + ", seller=" + seller
				+ ", sellerCount=" + sellerCount + ", avgRating=" + avgRating + ", review=" + review + "]";
	}

	


}
