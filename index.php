<?php
/**
 * The main template file
 *
 *
 *
 * 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme
 */

get_header();
?>
<?php $group = get_field('intro_section'); ?>
<div class="intro" id="intro">	 
 	<div class="container">
		<div class="intro-content">
		  <div class="intro-text">
			 	<div class="intro-title"><?php echo $group['intro_title']; ?></div>
				<div class="intro-suptitle"><?php echo $group['intro_subtitle']; ?></div>
		 		<?php if( $group['intro_button'] ): ?>
			  	<a href="<?php echo $group['intro_button']['url']; ?>" class="intro-button" id="intro-btn"><?php echo $group['intro_button']['title']; ?></a>
				<?php endif; ?>
		  </div>
		  <?php if( $group['intro_image'] ) : ?>
			  <div class="intro-image">
			  	<img class="intro-photo" src="<?php echo $group['intro_image']['url']; ?>" alt="photo">
			  </div>
			<?php endif; ?>
		</div>
  </div>
  <div class="prise-form-succesful">
	  <div class="succesful-logo"></div>
	  <div class="succesful-title">Готово!</div>
	  <div class="succesful-suptitle">Уже совсем скоро наш менеджер свяжется с вами.</div>
	  <div class="submit-form">
	    <a class="succesful-button" href="/" >На главную</a>
		</div>
	</div>
</div>
<?php $group = get_field('services'); ?>
<?php if ( is_array( $group['services'] ) && !empty($group['services']) ) : ?>
	<div class="Services" id="Servises">
	  <div class="container">
	    <div class="servise-title"><?php echo $group['services_title']; ?></div>
	    <div class="servis-content">
	    	<?php
	    	
	    		foreach ($group['services'] as $service) { ?>

		    		<div class="servis-item">
		    			<?php if( $service['service_image'] ): ?>
			        	<img class="item-image" src="<?php echo $service['service_image']['url'] ?>" alt="<?php echo $service['service_image']['alt']; ?>">
		        	<?php endif; ?>
			        <div class="item-title"><?php echo $service['service_title']; ?></div>
			        <div class="item-suptitle"><?php echo $service['service_subtitle']; ?></div>
			        <div class="item-info" id="flets">
			          <div class="info-title"><?php echo $service['service_title']; ?></div>
					  		<a class="info-close"></a>
			          <div class="info-text">
			          	<?php echo $service['service_description']; ?>
				  			</div>           
							</div>
			        <div class="service-buttons">
					  		<a class="info-button" id="flet"></a> 
			        </div>
							<a class="item-button" ><?php esc_html_e('Заказать', 'theme');?></a>
			      </div>
	    	
	    	<?php
	    	}
	    	
	    	?>

	    </div>
	  </div>

	  <?php echo do_shortcode($group["service_form_shortcode"]); ?>

	</div>
<?php endif; ?>
<?php $group = get_field('advantages'); ?>
<?php if ( is_array( $group['advantages'] ) && !empty($group['advantages']) ) : ?>
	<div class="advantages" id="advantages">
	  <div class="container">
			<div class="advantages-title"><?php echo $group['advantages_title']; ?></div>
		  <div class="advantages-content">
	  		<?php

	  		foreach ($group['advantages'] as $advantage) { ?>
	  			<div class="advantages-item">
					  <img class="advantages-item-logo" src="<?php echo $advantage['service_image']['url']; ?>" alt="logo">
					  <div>
					    <div class="advantages-item-title"><?php echo $advantage['service_title']; ?></div>
					    <div class="advantages-item-text"><?php echo $advantage['service_description']; ?></div>
					  </div>
			    </div>
	  		<?php
	  		}

	  		?>
	    </div>
	  </div>
	</div>
<?php endif; ?>
<?php $group = get_field('how_we_work'); ?>
<?php if ( is_array( $group['how_we_work_items'] ) && !empty($group['how_we_work_items']) ) : ?>
	<div class="how-we-work" id="how-we-work">
	  <div class="container">
			<div class="work-title"><?php echo $group['how_we_work_title']; ?></div>
			<div class="work-content">
			<?php
				$count = 0;
				$array_size = count($group['how_we_work_items']);
				foreach ( $group['how_we_work_items'] as $how_we_work_item ) :
			?>
			  <div class="work-item">
					<div class="work-item-nummer"><?php echo ++$count; ?></div>
					<div class="work-item-title"><?php echo $how_we_work_item['we_work_title']; ?></div>
					<div class="work-item-text"><?php echo $how_we_work_item['we_work_subtitle']; ?></div>
			  </div>
			  <?php if ( $count < $array_size): ?>
			  	<img class="work-arrow" src="<?php echo get_template_directory_uri(); ?>/image/advantages/arrow.png" alt="arrow">	
			  <?php endif ?>
			<?php endforeach; ?>

			</div>
	  </div>
	</div>
<?php endif; ?>
<?php $group = get_field('achievements_section'); ?>
<?php if ( is_array( $group['achievements_items'] ) && !empty($group['achievements_items']) ) : ?>
	<div class="Achievements">
	  <div class="container">
	    <div class="achievements-title"><?php echo $group['achievements_title']; ?></div>
	    <div class="achievements-content">
		    <div class="achievements-photo">
					<div class="photo-content"></div>
			    <img class="achievements-background" src="<?php echo get_template_directory_uri(); ?>/image/achivments/background.png" alt="achievments-background">
	        <img class="achievements-image" src="<?php echo $group['achievements_image']['url']; ?>" alt="<?php echo $group['achievements_image']['alt']; ?>achiements-photo"> 
		    </div>	
				<div class="achievement-text-content">
				<?php
					foreach ($group['achievements_items'] as $achievement) :
				?>

		     	<div class="text-item">
			   		<div class="text-item-title"><?php echo $achievement['achievement_title']; ?></div>
				   	<div class="text-achievemenst"><?php echo $achievement['achievement_text']; ?></div>
				 	</div>
				<?php endforeach; ?>

		  	</div>	
	  	</div>
	  </div>
	</div>
<?php endif; ?>
<?php $group = get_field('price'); ?>
<?php if ( is_array( $group['price_items'] ) && !empty($group['price_items']) ) : ?>
<div class="prise" id="prise">
	<div class="container">
	  <div class="prise-title"><?php echo $group['price_title']; ?></div>
	  <div class="prise-suptitle"><?php echo $group['price_subtitle']; ?></div>
		<div class="prise-content">

		<?php
			foreach ( $group['price_items'] as $price_item ) :
		?>
	    <div class="prise-item">
				<div class="prise-item-title"><?php echo $price_item['prise_item_title']; ?></div>
			  <div class="text-prise"><?php echo $price_item['price']; ?></div>
			  <div class="text-time"><?php echo $price_item['time']; ?></div>
			  <div class="prise-item-content">
			  <?php
			  	foreach ( $price_item['content_list'] as $item ) :
			  ?>
			    <div class="prise-inform"><?php echo $item['content_list_item']; ?></div>
			  <?php endforeach; ?>
		   	</div>
		   	<div class="prise-submit">
			   	<a href="#" class="prise-button popap">Заказать</a>
		   	</div>
     	</div>
    <?php endforeach; ?>

	  </div>
 	</div>
  
</div>
<?php endif; ?>
<?php $group = get_field('form_section'); ?>
<div class="calculator-info" id="calculator">
	<div class="container">
		<div class="calculator-title"><?php echo $group['calculator_form_title']; ?></div>

		<?php
			echo do_shortcode( $group["form_shortcode"] );
		?>

	</div>
</div>
<?php
get_footer();
?>