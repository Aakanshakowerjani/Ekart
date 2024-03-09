package com.infy.ekart.product.dto;

import java.util.List;
import java.util.Objects;


public class ProductDTO {
	
	private Integer id;
	
	private String imageUrl;
	
	private String displayName;
	
	private String shortDesc;
	
	private String desc;
	
	private String category;
	
//	private String brand;
	
	private Double price;
	
	private Integer discount;
	
	private Double deliveryCharge;
	
	private Double offerPrice;
	
	private String seller;
	
	private Integer sellerCount;
	
	private Integer avgRating;
	
//	private Integer availableQuantity;
	
	private List<ReviewDTO> review;

	

	public List<ReviewDTO> getReview() {
		return review;
	}

	public void setReview(List<ReviewDTO> review) {
		this.review = review;
	}

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

	@Override
	public int hashCode() {
		return Objects.hash(avgRating, category, deliveryCharge, desc, discount, displayName, id, imageUrl, offerPrice,
				price, review, seller, sellerCount, shortDesc);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductDTO other = (ProductDTO) obj;
		return Objects.equals(avgRating, other.avgRating) && Objects.equals(category, other.category)
				&& Objects.equals(deliveryCharge, other.deliveryCharge) && Objects.equals(desc, other.desc)
				&& Objects.equals(discount, other.discount) && Objects.equals(displayName, other.displayName)
				&& Objects.equals(id, other.id) && Objects.equals(imageUrl, other.imageUrl)
				&& Objects.equals(offerPrice, other.offerPrice) && Objects.equals(price, other.price)
				&& Objects.equals(review, other.review) && Objects.equals(seller, other.seller)
				&& Objects.equals(sellerCount, other.sellerCount) && Objects.equals(shortDesc, other.shortDesc);
	}

	@Override
	public String toString() {
		return "ProductDTO [id=" + id + ", imageUrl=" + imageUrl + ", displayName=" + displayName + ", shortDesc="
				+ shortDesc + ", desc=" + desc + ", category=" + category + ", price=" + price + ", discount="
				+ discount + ", deliveryCharge=" + deliveryCharge + ", offerPrice=" + offerPrice + ", seller=" + seller
				+ ", sellerCount=" + sellerCount + ", avgRating=" + avgRating + ", review=" + review + "]";
	}

}
