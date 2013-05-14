<div class="span9">
	<div class="hero-unit nobottom">

		<h3><?php echo Yii::t('global','Manage My Themes'); ?></h3>
		<div class="editinstructions">
			<?php echo Yii::t('admin','Choose the theme you wish to use. Sub-options for the theme are listed below which you can set. Click Set to switch to this theme. Your currently active theme is always listed first.'); ?>
		</div>
		<div class="clearfix spaceafter"></div>
		<?php echo CHtml::beginForm('manage', 'post'); ?>

		<div class="row-fluid">
		<?php


			foreach($arrThemes as $key=>$objTheme):
				echo '<div class="span4"><div class="themeselect" >';
				echo CHtml::radioButton('theme',
					($key == Yii::app()->theme->name ?  true : false),
					array('id'=>$key,'value'=>$key));
				echo '</div>';
				echo CHtml::tag('div',array(
						'class'=>'themeicon '.($key == Yii::app()->theme->name ?  "selected" : ""),
						'id'=>'img'.$key,
						'onClick'=>'js:
								$("#"+picked).attr("checked", false);
								$("#img"+picked).removeClass("selected");
								$("#'.$key.'").attr("checked", true);
								picked = "'.$key.'";
								$("#img"+picked).addClass("selected")'),
					$objTheme['img']);
				echo CHtml::tag('div',array(
						'class'=>'themeoptions',),
					$objTheme['options']);
				echo '</div>';
			endforeach;
		?>
		</div>
		<div class="clearfix spaceafter"></div>


		<div class="clearfix spaceafter"></div>
	</div>
		<p class="pull-right">
			<?php $this->widget('bootstrap.widgets.TbButton', array(
				'buttonType'=>'submit',
				'label'=>'Set',
				'type'=>'primary',
				'size'=>'large',
				'htmlOptions'=>array('id'=>'btnUpload'),
			)); ?>
		</p>

		<?php echo CHtml::endForm(); ?>


</div>
</div>